cmake_minimum_required(VERSION 3.10)  # Spécifiez la version minimale de CMake

# Définir le nom du projet
project(microservices-with-ddd-kata)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

include_directories(${PROJECT_SOURCE_DIR}/Dao)
include_directories(${PROJECT_SOURCE_DIR}/Entities)
include_directories(${PROJECT_SOURCE_DIR}/Services)
include_directories(${PROJECT_SOURCE_DIR})

file(GLOB SOURCES
     "${PROJECT_SOURCE_DIR}/Dao/*.cpp"
     "${PROJECT_SOURCE_DIR}/Entities/*.cpp"
     "${PROJECT_SOURCE_DIR}/Services/*.cpp"
     "${PROJECT_SOURCE_DIR}/*.cpp"
)

add_executable(a.out ${SOURCES})
