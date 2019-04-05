from ruamel.yaml import YAML

yaml = YAML(typ='safe')

document = open('data/events.yaml', 'r').read()
events = yaml.load(document)

def link_set(event):
    return 'link' in event.keys()

for event in events:
    if not link_set(event):
        title = event['title']
        tag = event['tag']
        metadata = "---\ntitle: {}\n---\n".format(title)
        path = "content/events/{}.md".format(tag)
        with open(path, 'w') as file:
            file.write(metadata)
