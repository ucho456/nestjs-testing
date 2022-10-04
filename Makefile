up: ## Do docker compose up with hot reload
	docker compose up -d

exec: ## Do docker compose exec
	docker container exec -it postgres-dev bash

down: ## Do docker compose down
	docker compose down

logs: ## Tail docker compose logs
	docker compose logs -f

ps: ## Check container status
	docker compose ps
