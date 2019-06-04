clean-event-pages:
	find content/events ! -name '_index.md' -type f -exec rm -f {} +

build-pages: clean-event-pages
	python scripts/build-pages.py

serve: build-pages
	hugo server \
		--buildDrafts \
		--buildFuture \
		--ignoreCache

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
