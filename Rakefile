task :default do
    sh "rake -T"
end

# CLEAN
desc "Clean package instalation and build"
task :clean do
    sh "sudo rm -Rf node_modules || rm -Rf lib || rm yarn.lock || rm .rake_tasks~ || yarn cache clean"
end
# END CLEAN

# ============================================================

# TOOLS
desc "Setup docker tools"
task :tools_up do
    sh "cd tools/server && docker network create abler || docker-compose up --build -d postgres elasticsearch redis"
end

desc "Stop docker tools"
task :tools_stop do
    sh "cd tools/server && docker-compose stop"
end

desc "Restart docker tools"
task :tools_restart do
    sh "cd tools/server && docker-compose restart"
end

desc "Create abler database"
task :tools_create_database do
    sh "PGPASSWORD=development createdb -U root -h localhost abler"
end

desc "Import database backup"
task :tools_import_backup do
    sh "PGPASSWORD=development pg_restore -O -Fc -v -x -j 4 -h localhost -U root -d abler tools/server/backend.backup"
end

desc "Backup abler database"
task :tools_backup_database do
    sh "docker exec -u root abler_postgres_1 pg_dump -Fc abler > tools/server/backend.backup"
end

desc "Redis flushall"
task :tools_redis_flushall do
    sh "cd tools/server/ && docker-compose exec redis redis-cli FLUSHALL"
end

desc "Full tools setup"
task :tools_setup do
    Rake::Task['tools_up'].invoke
    sleep 3
    Rake::Task['tools_create_database'].invoke
    Rake::Task['tools_import_backup'].invoke
end
# END TOOLS

# ============================================================

# CLIENT CANDIDATE

desc "Clone ats-front-candidate"
task :candidate_clone do
    sh "cd tools/client && git clone git@github.com:Abler-Recrutamento-Digital/ats-front-candidate.git"
end

desc "Install ats-front-candidate"
task :candidate_install do
    sh "cd tools/client/ats-front-candidate && yarn install"
end

desc "Git config ats-front-candidate"
task :candidate_git_config do
    sh "cd tools/client/ats-front-candidate && git checkout dev && git config pull.ff only && git pull"
end

desc "Copy .env file ats-front-candidate"
task :candidate_copy_env do
    sh "cd tools/client/ats-front-candidate && cp env.example .env"
end

desc "Git pull ats-front-candidate"
task :candidate_git_pull do
    sh "cd tools/client/ats-front-candidate && git pull"
end

desc "Start ats-front-candidate"
task :candidate_start do
    sh "cd tools/client/ats-front-candidate && yarn dev"
end

desc "Link ats-front-candidate to @abler/ats-front-resources-api"
task :candidate_link_resources do
    sh "cd tools/client/ats-front-candidate && yarn link @abler/ats-front-resources-api"
end

desc "Setup ats-front-candidate"
task :candidate_setup => [:candidate_clone, :candidate_git_config, :candidate_install, :candidate_copy_env, :candidate_link_resources] do
end

# END CLIENT CANDIDATE

# ============================================================

# CLIENT COMPANY

desc "Clone ats-front-company"
task :company_clone do
    sh "cd tools/client && git clone git@github.com:Abler-Recrutamento-Digital/ats-front-company.git"
end

desc "Install ats-front-company"
task :company_install do
    sh "cd tools/client/ats-front-company && yarn install"
end

desc "Git config ats-front-company"
task :company_git_config do
    sh "cd tools/client/ats-front-company && git checkout dev && git config pull.ff only && git pull"
end

desc "Copy .env file ats-front-company"
task :company_copy_env do
    sh "cd tools/client/ats-front-company && cp env.example .env"
end

desc "Git pull ats-front-company"
task :company_git_pull do
    sh "cd tools/client/ats-front-company && git pull"
end

desc "Start ats-front-company"
task :company_start do
    sh "cd tools/client/ats-front-company && yarn dev"
end

desc "Link ats-front-company to @abler/ats-front-resources-api"
task :company_link_resources do
    sh "cd tools/client/ats-front-company && yarn link @abler/ats-front-resources-api"
end

desc "Setup ats-front-company"
task :company_setup => [:company_clone, :company_git_config, :company_install, :company_copy_env, :company_link_resources] do
end

# END CLIENT COMPANY

# ============================================================

# DOCS
desc "Clone server docs"
task :docs_clone do
    sh "cd tools/server && git clone git@github.com:Abler-Recrutamento-Digital/ats-docs.git"
end

desc "Install server docs"
task :docs_install do
    sh "cd tools/server/ats-docs && yarn install"
end

desc "Git config server docs"
task :docs_git_config do
    sh "cd tools/server/ats-docs && git config pull.ff only"
end

desc "Git pull server docs"
task :docs_git_pull do
    sh "cd tools/server/ats-docs && git pull"
end

desc "Start server docs"
task :docs_start do
    sh "cd tools/server/ats-docs && yarn start --silent"
end

desc "Setup server docs"
task :docs_setup => [:docs_clone, :docs_install, :docs_git_config] do
end
# END DOCS

# ============================================================

# SERVER
desc "Run migrations in server"
task :server_migrate do
    sh "cd tools/server/ats-monolith && rake db:migrate"
end

desc "Clone server"
task :server_clone do
    sh "cd tools/server && git clone git@github.com:Abler-Recrutamento-Digital/ats-monolith.git"
end

desc "Git config server"
task :server_git_config do
    sh "cd tools/server/ats-monolith && git checkout dev && git config pull.ff only && git pull"
end

desc "Install server dependencies"
task :server_install do
    sh "cd tools/server/ats-monolith && bundle install && yarn install"
end

desc "Copy .env file server"
task :server_copy_env do
    sh "cp tools/server/.env tools/server/ats-monolith/.env"
end

desc "Git pull in server"
task :server_git_pull do
    sh "cd tools/server/ats-monolith && git pull"
end

desc "Git stash and pull in server"
task :server_git_stash_pull do
    sh "cd tools/server/ats-monolith && git add . && git stash && git pull"
end

desc "Rails server start"
task :server_start do
    sh "cd tools/server/ats-monolith && rails s"
end

desc "Rails server command"
task :server_command do
    sh "cd tools/server/ats-monolith && rails c"
end

desc "Index Candidate elasticsearch data"
task :server_index_candidate_elasticsearch do
    sh "cd tools/server/ats-monolith && echo 'Candidate.__elasticsearch__.create_index! force: true; Candidate.__elasticsearch__.import;' | rails c"
end

desc "Index Institution elasticsearch data"
task :server_index_institution_elasticsearch do
    sh "cd tools/server/ats-monolith && echo 'SharedEngine::Institution.__elasticsearch__.create_index! force: true; SharedEngine::Institution.__elasticsearch__.import;' | rails c"
end

desc "Index City elasticsearch data"
task :server_index_city_elasticsearch do
    sh "cd tools/server/ats-monolith && echo 'City.__elasticsearch__.create_index! force: true; City.__elasticsearch__.import;' | rails c"
end

desc "Index elasticsearch data"
task :server_index_elasticsearch => [:server_index_candidate_elasticsearch, :server_index_institution_elasticsearch, :server_index_city_elasticsearch] do
end

desc "Import public api feature"
task :server_import_public_api_feature do
    sh "cd tools/server/ats-monolith && rake public_api:import"
end

desc "Create multiple landing pages feature"
task :server_create_multiple_landing_pages_feature do
    sh "cd tools/server/ats-monolith && rake multiple_landing_pages_data_migration:create_feature"
end

desc "Full server setup"
task :server_setup => [ :server_clone, :server_git_config, :server_install, :server_copy_env, :server_migrate, :server_index_elasticsearch, :server_import_public_api_feature, :server_create_multiple_landing_pages_feature] do
end

# END SERVER

desc "First time setup"
task :setup => [:tools_setup, :docs_setup, :candidate_setup, :company_setup, :server_setup] do
end
