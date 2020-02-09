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
	make check-links

preview-build:
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify
	make check-links

open:
	open https://kubernetescommunitydays.org

check-links:
	curl https://htmltest.wjdp.uk | bash
	bin/htmltest
