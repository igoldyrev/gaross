<?php
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/metatags.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/keywords.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation-mobile.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/header.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation.html");

echo "<title>$titleconst";
echo $keywords[5][title];
echo "</title>";
echo "<meta name='description' content='";
echo $keywords[5][description];
echo "'/>";
echo "<meta name='keywords' content='";
echo $keywords[5][keywords];
echo "'/>" ?>

<div class="wrapper">
  <h1 class="title title-h1">Карта сайта</h1>
  <ul class="list list__unsorted">
    <li><a class="link" href="/">О компании</a></li>
    <li><a class="link" href="/licenses">Лицензии</a></li>
    <li><a class="link" href="/orders">Заказчики</a></li>
    <li><a class="link" href="/letters">Благодарственные письма</a></li>
    <li><a class="link" href="/contacts">Контакты</a></li>
  </ul>
</div>
<?php include($_SERVER["DOCUMENT_ROOT"] . "/blocks/footer.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/counters.html"); ?>
