clean-event-pages:
	rm -f content/events/*.md

build-pages: clean-event-pages
	python scripts/build-pages.py
	echo "Event pages:"
	@ls content/events

serve: build-pages
	hugo server \
		--buildDrafts \
		--buildFuture

production-build: build-pages
	hugo \
		--buildFuture \
		--ignoreCache \
		--minify

preview-build: build-pages
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify
