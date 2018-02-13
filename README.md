# Bounty-Dev-Setup
Setup a developer machine with all bells and whistles

We use a varied bunch of software components in our product. Some of these are,
MySQL, CouchDB as databases.  
Nginx as a proxy server.  
Nodejs based services (3 of them).  
Elasticsearch for querying and aggregations.  
Apache Spark for data analytics workloads.  
RabbitMQ for event system.  
Airflow for data analytics pipelines.  
JasperReports for prints and reports.  
ImageMagick for image handling service.  
ngrok to setup tunnelling for exposing local services.  

This is quite a handful for each developer to setup and manage on her workstation. What is a good way to simplify the setup and management of these services on a developer machine. A few of the functions to be offered are,
1. Ability to switch on/off individual services.
2. Ease of service discoverability and failover.
3. Ability to fetch and refresh both databases from data dumps.

Bonus, here are some services that we think are interesting, is there a good place to fit them in?
Consul (https://www.consul.io/), Vault (https://www.vaultproject.io/)

