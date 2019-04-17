from ruamel.yaml import YAML

yaml = YAML(typ='safe')

document = open('data/events.yaml', 'r').read()
events = yaml.load(document)

def event_link_not_set(event):
    return 'link' not in event.keys()

for event in events:
    if event_link_not_set(event):
        event_keys = event.keys()

        title = event['title']
        tag = event['tag']
        start = event['start']
        end = event['end']

        metadata = "---\ntitle: {}\nstart: {}\nend: {}\n".format(title, start, end)

        for key in ['location', 'img', 'foo']:
            if key in event_keys:
                metadata += "{}: {}\n".format(key, event[key])
    
        if 'social' in event_keys:
            social_keys = event['social'].keys()

            metadata += "social:\n"

            for key in ['facebook', 'twitter']:
                if key in social_keys:
                    metadata += "  {}: {}\n".format(key, event['social'][key])

        metadata += "---\n"
        path = "content/events/{}.md".format(tag)
        with open(path, 'w') as file:
            file.write(metadata)
