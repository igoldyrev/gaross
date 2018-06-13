<?php
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/metatags.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/keywords.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation-mobile.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/header.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation.html");

echo "<title>$titleconst";
echo $keywords[1][title];
echo "</title>";
echo "<meta name='description' content='";
echo $keywords[1][description];
echo "'/>";
echo "<meta name='keywords' content='";
echo $keywords[1][keywords];
echo "'/>" ?>

<div class="wrapper">
  <h1 class="title title-h1">Лицензии</h1>
  <div class="license" id="mchs">
    <h2 class="title title-h2">Лицензия МЧС</h2>
    <p class="text">На осуществление деятельности по монтажу , техническому обслуживанию и ремонту средств обеспечения
      пожарной безопасности зданий и сооружений</p>
    <div class="img__wrap">
      <img class="img license__img" src="/img/licenses/mchs-1.jpg" alt="Лицензия МЧС<">
    </div>
    <div class="license__link-inner">
      <i class="fa fa-file-pdf-o license__icon"></i><a class="link" target="_blank" href="/pdf/mchs-pdf.pdf">Смотреть
        в PDF</a>
    </div>
  </div>
  <div class="license" id="sro-stroiteli-urala">
    <h2 class="title title-h2">СРО "Строители Урала"</h2>
    <p class="text">Свидетельство о допуске к определенным видам работ, которые оказывают влияние на безопасность
      объектов капитального строительства</p>
    <div class="img__wrap">
      <img class="img license__img" src="/img/licenses/smr-220317-0.jpg" alt="СРО Строители Урала">
    </div>
    <div class="license__link-inner">
      <i class="fa fa-file-pdf-o license__icon"></i><a class="link" target="_blank"
                                                       href="/pdf/smr-220317-pdf.pdf">Смотреть в PDF</a>
    </div>
  </div>
  <div class="license" id="sro-project-work">
    <h2 class="title title-h2">СРО на проектные работы</h2>
    <div class="img__wrap">
      <img class="img license__img" src="/img/licenses/project-work-0.jpg" alt="СРО на проектные работы">
    </div>
    <div class="license__link-inner">
      <i class="fa fa-file-pdf-o license__icon"></i><a class="link" target="_blank"
                                                       href="/pdf/project-work-pdf.pdf">Смотреть в PDF</a>
    </div>
  </div>
</div>
<?php include($_SERVER["DOCUMENT_ROOT"] . "/blocks/footer.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/counters.html"); ?>
