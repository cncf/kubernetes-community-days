from yaml import load, dump

document = open('data/events.yaml', 'r').read()
events = load(document)

for event in events:
    metadata = "---\ntitle: {}\n---\n".format(event['title'])
    path = "content/events/{}.md".format(event['tag'])
    with open(path, 'w') as file:
        file.write(metadata)

