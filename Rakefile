task :default do
    sh "rake -T"
end


desc "Clean cache"
task :clean do
    sh "sudo rm -Rf node_modules || rm -Rf lib || rm yarn.lock || rm .rake_tasks~ || yarn cache clean"
end


desc "Setup docker tools"
task :setup_tools do
    sh "cd tools/server && docker network create abler || docker-compose up --build -d postgres elasticsearch redis"
end


desc "Stop docker tools"
task :stop_tools do
    sh "cd tools/server && docker-compose stop"
end


desc "Restart docker tools"
task :restart_tools do
    sh "cd tools/server && docker-compose restart"
end


desc "Create abler database"
task :create_database do
    sh "PGPASSWORD=development createdb -U root -h localhost abler"
end


desc "Import database backup"
task :import_backup do
    sh "PGPASSWORD=development pg_restore -O -Fc -v -x -j 4 -h localhost -U root -d abler tools/server/backup/2021-03-16.backup"
end


desc "Index all elasticsearch data"
task :index_elasticsearch do
    sh "cd tools/server/ats-monolith && echo 'Candidate.__elasticsearch__.create_index! force: true; City.__elasticsearch__.create_index! force: true; SharedEngine::Institution.__elasticsearch__.create_index! force: true; Candidate.__elasticsearch__.import; City.__elasticsearch__.import'; SharedEngine::Institution.__elasticsearch__.import | rails c"
end


desc "Clone server and install"
task :setup_server do
    sh "cd tools/server && git clone git@github.com:Abler-Recrutamento-Digital/ats-monolith.git || cd ats-monolith && git checkout dev && git config pull.ff only && git pull && bundle install && yarn install"
end


desc "Clone server docs and install"
task :setup_docs do
    sh "cd tools/server && git clone git@github.com:Abler-Recrutamento-Digital/ats-docs.git || cd ats-docs && yarn install && git config pull.ff only"
end


desc "Start server docs"
task :start_docs do
    sh "cd tools/server/ats-docs && yarn start"
end


desc "Run migrations in server"
task :migrate_server do
    sh "cd tools/server/ats-monolith && rake db:migrate"
end


desc "Git pull in server"
task :gpull_server do
    sh "cd tools/server/ats-monolith && git pull"
end


desc "Git stash and pull in server"
task :gspull_server do
    sh "cd tools/server/ats-monolith && git add . && git stash && git pull"
end


desc "Git pull docs"
task :gpull_docs do
    sh "cd tools/server/ats-docs && git pull"
end


desc "Rails server start"
task :start_server do
    sh "cd tools/server/ats-monolith && rails s"
end


desc "Rails server command"
task :command_server do
    sh "cd tools/server/ats-monolith && rails c"
end


desc "Full tools setup"
task :fsetup_tools do
    Rake::Task['setup_tools'].invoke
    Rake::Task['create_database'].invoke
    Rake::Task['import_backup'].invoke
end


desc "Full server setup"
task :fsetup_server do
    Rake::Task['setup_server'].invoke
    Rake::Task['fsetup_tools'].invoke
    Rake::Task['migrate_server'].invoke
    Rake::Task['index_elasticsearch'].invoke
    Rake::Task['start_server'].invoke
end
