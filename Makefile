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
