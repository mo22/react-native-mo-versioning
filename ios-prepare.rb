require 'xcodeproj'
puts('this is ios-prepare.rb')
puts("SOURCE_ROOT=#{ENV['SOURCE_ROOT']}")
puts("PROJECT_NAME=#{ENV['PROJECT_NAME']}")
puts("PROJECT_NAME=#{PROJECT_NAME}")
puts(ENV)
path_to_project = "${SOURCE_ROOT}/${PROJECT_NAME}.xcodeproj"

project = Xcodeproj::Project.open(path_to_project)
main_target = project.targets.first
phase = main_target.new_shell_script_build_phase("Name of your Phase")
phase.shell_script = "do sth with ${CONFIGURATION_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/your.file"
project.save()
