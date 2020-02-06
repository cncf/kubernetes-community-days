setup:
	yarn

serve: setup
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

open:
	open https://kubernetescommunitydays.org
