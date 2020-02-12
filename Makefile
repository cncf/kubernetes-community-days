clean:
	rm -rf public

setup:
	yarn

serve: setup
	hugo server \
		--buildDrafts \
		--buildFuture \
		--ignoreCache

production-build: clean
	hugo \
		--buildFuture \
		--ignoreCache \
		--minify
	make check-links

preview-build: clean
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify
	make check-links

open:
	open https://kubernetescommunitydays.org

link-checker-setup:
	curl https://htmltest.wjdp.uk | bash

run-link-checker:
	bin/htmltest

check-links: link-checker-setup run-link-checker

check-external-links: production-build
	bin/htmltest --conf .htmltest.external.yml
