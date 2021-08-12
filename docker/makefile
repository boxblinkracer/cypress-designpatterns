# Makefile for DEV purposes
# Author: Christian Dangl

.PHONY: help
.DEFAULT_GOAL := help


help:
	@grep -E '^[a-zA-Z_-_0-9]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# ---------------------------------------------------------------------------------------------


run: ## Runs the Shopware project
	# ---------------------------------------------------------------------------
	docker exec -i shop mysql -uroot -proot shopware < ./prepare-shop.sql
	docker exec -i shop bash -c "php bin/console cache:clear"
	# ---------------------------------------------------------------------------
	@open https://scd.dasistweb.com
