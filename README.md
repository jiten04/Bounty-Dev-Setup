# Bounty-Dev-Setup
Setup a developer machine with all bells and whistles

We use a varied bunch of software components in our product. Some of these are,
1. MySQL, CouchDB as databases.  
2. Nginx as a proxy server.  
3. Nodejs based services (3 of them).  
4. Elasticsearch for querying and aggregations.  
5. Apache Spark for data analytics workloads.  
6. RabbitMQ for event system.  
7. Airflow for data analytics pipelines.  
8. JasperReports for prints and reports.  
9. ImageMagick for image handling service.  
10. ngrok to setup tunnelling for exposing local services.  

This is quite a handful for each developer to setup and manage on her workstation. What is a good way to simplify the setup and management of these services on a developer machine. A few of the functions to be offered are,
1. Ability to switch on/off individual services.
2. Ease of service discoverability and failover.
3. Ability to fetch and refresh both databases from data dumps.

Bonus, here are some services that we think are interesting, is there a good place to fit them in?
Consul (https://www.consul.io/), Vault (https://www.vaultproject.io/)

You can use the 3 NodeJS projects included in this project.

### Here is how to start the 3 servers -

 * clone the repository.
 * `npm install`
 * The 3 servers are inside separate folders node_app_* , run `node server.js` for the server you want to fire up.

