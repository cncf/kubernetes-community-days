from yaml import load, dump

document = open('data/events.yaml', 'r').read()
events = load(document)

for event in events:
    title = event['title']
    tag = event['tag']
    metadata = "---\ntitle: {}\n---\n".format(title)
    path = "content/events/{}.md".format(tag)
    with open(path, 'w') as file:
        file.write(metadata)
