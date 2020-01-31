# Redmine Assign to me Plugin

## Plugin installation

1. Copy the plugin directory into the vendor/plugins directory
2. Restart Redmine

with a Dockerfile

```
   FROM redmine
   WORKDIR /usr/src/redmine/plugins
   RUN git clone https://github.com/fraoustin/redmine_assign_to_me.git
   WORKDIR /usr/src/redmine/
```
 

## Usage

When create a new issue, assign value is me

## License

This plugin is released under the GPLv2.
