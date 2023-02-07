<?php

if (isset($_POST["msg"])) {
    
    $to = $_POST["alexandreacevedobasei@gmail.com"];
    $subject = $_POST["obj"];
    $message = $_POST["msg"];
    $headers = "From: ".$_POST["source"]."r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } 
    else {
        echo "Failed to send email.";
    }
}

?>


<!DOCTYPE html>
<html lang="fr" ng-app='InputValidation'>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/pages/index.css">
    <title>Alexandre Basei - Portfolio</title>
    <script src="./js/lib/angular.min.js"></script>
    <script src="./js/controllers/inputvalidation.js"></script>
</head>

<body>
    <header>
        <button id="burger" onclick="addClass('burger','caché');addClass('navigation','active');rmClass('burger2','caché')">
            <div id="ham1"></div>
            <div id="ham2"></div>
            <div id="ham3"></div>
        </button>
        <button id="burger2" class="caché" onclick="addClass('burger2','caché');rmClass('burger','caché');rmClass('navigation','active')">⛌</button>
        <nav id="navigation">
            <a href="index.php" target="_self" rel="noopener noreferrer">Accueil</a>
            <a href="real.htm" target="_self" rel="noopener noreferrer">Mes réalisations</a>
        </nav>
    </header>

    <main>

        <section id="title-container">
            <h1 id="portfolio">Portfolio</h1>
            <h1>Alexandre<br>Basei</h1>
        </section>

        <article>
            <h2>Bienvenue !</h2><br>
            <p>
                Bonjour ! Je m’appelle Alexandre Basei, j’ai 19 ans et je vis à Paris. Attiré depuis toujours par la création de sites web et par l’audiovisuel, j’ai décidé de suivre une formation sur les Métiers du Multimédia et de l’Internet (MMI) à l’IUT de Vélizy. J’étudie la création de sites web, de leur conception à leur développement, le graphisme, la communication, l’audiovisuel et la création d’environnements interactifs. <br><br>

                J’ai aussi décidé de réaliser ce BUT car la formation est pluridisciplinaire, ce qui me permet d’étudier de nombreux domaines et d’être polyvalent. J’ai déjà beaucoup appris depuis le début de la formation, que ce soit au niveau de la maîtrise logicielle ( Photoshop, InDesign, After Effects, Unity…) ou de la maîtrise de langages web comme le HTML, le CSS, le PHP et le JavaScript. Je sais aussi utiliser certains frameworks comme Angular.js, Vue.js ou Symfony. Enfin, j’ai une bonne maîtrise des langages de programmation que le Java ou le C#. <br><br>

                J’ai déjà réalisé plusieurs projets, comme la conception d’une marque, de nombreux sites web ou la réalisation de deux documentaires. Sur la page Mes Réalisations, vous pourrez avoir un aperçu plus détaillé de mes projets.
            </p>
            <h3 id="visite">Bonne visite !</h3>
        </article>

        <h2>ME CONTACTER</h2>

        <section ng-controller='Form'>
            <h3>Mail</h3>
            <span>alexandreacevedobasei@gmail.com</span><br><br>

            <h3>Téléphone</h3>
            <span>06 46 88 46 88</span><br><br>

            <h3>Linkedin</h3>
            <a href="https://www.linkedin.com/in/alexandre-basei" target="_blank" rel="noopener noreferrer">linkedin.com/in/alexandre-basei</a>

            <form method="post" ng-submit="submitForm(Form.$valid)" novalidate class="myform">
                <label for="source">Votre e-mail :</label>
                <input type="mail" name="source" ng-model='source' required><br>

                <label for="obj">Objet :</label><br>
                <input type="text" name="obj" ng-model='obj' required>

                <label for="msg">Message :</label>
                <textarea name="msg" cols="30" rows="10" ng-model='msg' required></textarea>

                <button type="submit" ng-disabled="Form.$invalid" id="envoi">Envoyer</button>
            </form>
        </section>
    </main>

    <footer>

    </footer>

    <script src="./js/src/functions.js"></script>
    <script src="./js/src/main.js"></script>
</body>

</html>