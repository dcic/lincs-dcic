BD2K-LINCS DCIC
=
The BD2K-LINCS Data Coordination and Integration Center is part of the Big Data to Knowledge (BD2K) NIH initiative, and it is the data coordination center for the NIH Common Fund's Library of Integrated Network-based Cellular Signatures (LINCS) program, which aims to characterize how a variety of human cells, tissues and the entire organism respond to perturbations by drugs and other molecular factors. See figure demonstrating the overall data flow of the LINCS project.

Visit [lincs-dcic.org](http://lincs-dcic.org/#/) for more information.

To run locally:

1) Ensure all dependencies are installed (npm install)
2) php -S localhost:8000 router.php

For deployment:

1) Commit all changes
2) npm run push (builds and pushes to docker hub)
3) SSH into AWS
4) docker pull maayanlab/lincs-dcic:latest && docker kill lincs-dcic && docker rm lincs-dcic && docker run -d --name='lincs-dcic' -p 80:8000 maayanlab/lincs-dcic:latest (Removes old container and runs new)
