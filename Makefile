serve:
	hugo server \
		--buildDrafts \
		--buildFuture \
		--ignoreCache

production-build:
	hugo \
		--buildFuture \
		--ignoreCache \
		--minify

preview-build:
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify
