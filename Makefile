build-pages:
	python scripts/build-pages.py

serve: build-pages
	hugo server \
		--buildDrafts \
		--buildFuture

production-build: build-pages
	hugo --minify

preview-build: build-pages
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify
