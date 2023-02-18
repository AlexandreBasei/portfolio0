<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require './config.php';

if (isset($_POST["msg"])) {

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = false;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = HOST;                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = USER;                     //SMTP username
        $mail->Password   = PWD;                               //SMTP password
        $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
        $mail->Port       = PORT;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom($_POST["source"], $_POST["source"]);
        $mail->addAddress('abasei@alexandre.basei.mmi-velizy.fr');     //Add a recipient
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        $mail->addBCC('alexandreacevedobasei@gmail.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $_POST["obj"];
        $mail->Body    = $_POST["msg"];
        // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo "<script>console.log('Email sent successfully.');</script>";
    } catch (Exception $e) {
        echo "<script>console.log('Email sent successfully.  Mailer Error: {$mail->ErrorInfo}');</script>";
    }

}

?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/uicons-thin-straight/css/uicons-thin-straight.css">
    <link rel="stylesheet" href="./css/pages/index.css">
    <title>Alexandre Basei - Portfolio</title>
</head>

<body>
    <header>
        <button id="burger"
            onclick="addClass('burger','caché');addClass('navigation','active');rmClass('burger2','caché')">
            <div id="ham1"></div>
            <div id="ham2"></div>
            <div id="ham3"></div>
        </button>
        <button id="burger2" class="caché"
            onclick="addClass('burger2','caché');rmClass('burger','caché');rmClass('navigation','active')">⛌</button>
        <nav id="navigation">
            <a class="accueil" href="index.php" target="_self" rel="noopener noreferrer">
                <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                <lord-icon id="ico1" src="https://cdn.lordicon.com/slduhdil.json" trigger="hover" target=".accueil"
                    colors="primary:#ffffff" state="hover-2" style="width:32px;height:32px">
                </lord-icon>
                Accueil
            </a>
            <a class="real" href="real.htm" target="_self" rel="noopener noreferrer">
                <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                <lord-icon id="ico2" src="https://cdn.lordicon.com/zvllgyec.json" trigger="hover" target=".real"
                    colors="primary:#ffffff" state="hover" style="width:32px;height:32px">
                </lord-icon>
                Mes réalisations
            </a>
        </nav>
    </header>

    <main>

        <section id="title-container">
            <h1 id="portfolio">Portfolio</h1>
            <h1>Alexandre <br> Basei</h1>
            <div>
                <a href="#real-container"><img src="./images/svg/scroll.svg" alt="scroller"></a>
            </div>
        </section>

        <section id="real-container">
            <h2 id="real">Réalisations</h2>

            <div class="projet centre" id="p1">
                <h3>Leclerc Noël</h3>
                <p>Ce projet avait pour objectif de réaliser un site web avec l’expérience utilisateur la plus
                    qualitative possible ayant pour thème Noël et la chaîne de magasins Leclerc. Le site web s’adresse
                    aux enfants de 5 à 10 ans.<br><br>

                    Je faisais partie d’une équipe de 8 membres, dont 5 graphistes et 3 développeurs. J’ai développé la
                    grotte gelée, l’igloo de la photo, le sapin de Noël et le palais de la gourmandise. <br><br>

                    Nous avons utilisé github pour réaliser le projet et pour travailler plus efficacement en équipe.
                </p>
                <a href="http://noel.alexandre.basei.mmi-velizy.fr" target="_blank" rel="noopener noreferrer" class="target">
                    <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                    <lord-icon src="https://cdn.lordicon.com/xfftupfv.json" trigger="hover" target=".target"
                        colors="primary:#121331" state="hover" style="width:25px;height:25px;top:5px">
                    </lord-icon>VISITER
                </a>
            </div>

            <div class="projet droite" id="p2">
                <img src="./images/gif/Basei_AnimJPO.gif" alt="Animation bombe">
                <img src="./images/gif/M5-3-2.gif" alt="">
            </div>

            <div class="projet droite icontainer" id="p3">
                <iframe class="resp-iframe" src="https://www.youtube.com/embed/4m4eWzHaC6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div id="carou">
                <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                <lord-icon id="carouselL" src="https://cdn.lordicon.com/xsdtfyne.json" trigger="click"
                    colors="primary:#121331" state="hover-2">
                </lord-icon>
                <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                <lord-icon id="carouselR" src="https://cdn.lordicon.com/xsdtfyne.json" trigger="click"
                    colors="primary:#121331" state="hover-2">
                </lord-icon>
            </div>

            <a href="./real.htm" target="_self" rel="noopener noreferrer" class="cta">Découvrir mes autres projets</a>
        </section>

        <article>
            <h2>Bienvenue !</h2><br>
            <p>
                Bonjour ! Je m’appelle Alexandre Basei, j’ai 19 ans et je vis à Paris. Attiré depuis toujours par la
                création de sites web et par l’audiovisuel, j’ai décidé de suivre une formation sur les Métiers du
                Multimédia et de l’Internet (MMI) à l’IUT de Vélizy. J’étudie la création de sites web, de leur
                conception à leur développement, le graphisme, la communication, l’audiovisuel et la création
                d’environnements interactifs. <br><br>

                J’ai aussi décidé de réaliser ce BUT car la formation est pluridisciplinaire, ce qui me permet d’étudier
                de nombreux domaines et d’être polyvalent. J’ai déjà beaucoup appris depuis le début de la formation,
                que ce soit au niveau de la maîtrise logicielle ( Photoshop, InDesign, After Effects, Unity…) ou de la
                maîtrise de langages web comme le HTML, le CSS, le PHP et le JavaScript. Je sais aussi utiliser certains
                frameworks comme Angular.js, Vue.js ou Symfony. Enfin, j’ai une bonne maîtrise des langages de
                programmation comme le Java ou le C#. <br><br>

                J’ai déjà réalisé plusieurs projets, comme la conception d’une marque, de nombreux sites web ou la
                réalisation de deux documentaires. Sur la page Mes Réalisations, vous pourrez avoir un aperçu plus
                détaillé de mes projets.
            </p>
            <h3 id="visite">Bonne visite !</h3>
        </article>

        <h2>Me contacter</h2>

        <section id="contact">
            <div id="infos">
                <h3>Mail</h3>
                <span>alexandreacevedobasei@gmail.com</span><br><br>

                <h3>Téléphone</h3>
                <span>06 46 88 46 88</span><br><br>

                <h3>Linkedin</h3>
                <a href="https://www.linkedin.com/in/alexandre-basei" target="_blank"
                    rel="noopener noreferrer">linkedin.com/in/alexandre-basei</a>
            </div>

            <form method="post">
                <label for="source">Votre e-mail :</label><br>
                <input type="mail" name="source" required><br>

                <label for="obj">Objet :</label><br>
                <input type="text" name="obj" required><br>

                <label for="msg">Message :</label><br>
                <textarea name="msg" cols="30" rows="10" required></textarea><br>

                <button type="submit" id="envoi">Envoyer</button>
            </form>
        </section>
    </main>

    <footer>

    </footer>

    <script src="./js/src/functions.js"></script>
    <script src="./js/src/main.js"></script>
</body>

</html>