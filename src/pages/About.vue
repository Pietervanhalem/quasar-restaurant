<template>
<q-page padding class='full-width'>
 <q-img
    class="header-image row"
    src="../assets/Pipi-mimi.png"
    spinner-color="white"
  />

  <div class="text-about">
    <h3> Over ons</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nec leo non egestas. Sed iaculis turpis sed dui suscipit, id commodo mauris mattis. Integer vehicula lectus eu metus aliquet sagittis. Nunc laoreet nulla est. Aliquam mauris lorem, accumsan non aliquet in, gravida in risus. Phasellus a urna massa. Nam sed leo sed nisi eleifend euismod quis ac turpis. Maecenas suscipit dictum commodo. Ut laoreet dui sapien, id porttitor ligula pharetra vel. Sed tempus tortor hendrerit imperdiet hendrerit. Phasellus hendrerit tortor elit.
      <br><br>
      Donec quis elit tempor, vulputate diam sollicitudin, facilisis odio. Quisque ac risus sit amet sem lacinia viverra. Nullam eu faucibus velit. Mauris fermentum ex vitae lectus sodales, sit amet convallis ligula condimentum. Nulla placerat felis vel lacus blandit maximus. Ut pellentesque cursus quam, sit amet blandit justo posuere sit amet. Donec mollis ut libero ac ornare. Donec pharetra pharetra elit eu molestie. Nunc fermentum dignissim tortor, a vehicula purus condimentum vel. Etiam ac felis ipsum.

      Ut fringilla dapibus elit, in dictum mi facilisis eu. Integer cursus auctor lectus eget congue. Ut euismod libero id odio pharetra vestibulum. Phasellus maximus tellus id cursus dictum. Nulla volutpat est eget libero dapibus, nec accumsan diam vehicula. Mauris tristique justo vitae dolor ultricies aliquet. Vestibulum fringilla malesuada porta. Ut rutrum imperdiet pellentesque. Suspendisse tempus erat odio, non faucibus ipsum volutpat vitae. Fusce convallis magna nibh.
      <br><br>
      Fusce laoreet risus ipsum, sit amet imperdiet felis aliquam at. In rutrum mi vel augue sagittis ultricies. Proin quis efficitur nisl. Sed volutpat metus magna, non egestas arcu luctus eget. Integer auctor gravida turpis, nec aliquet urna interdum eu. Nulla porta felis vitae tortor congue, non faucibus massa aliquet. Curabitur enim enim, vulputate et turpis et, interdum luctus augue. Aliquam eu rhoncus odio, nec vulputate tellus. In iaculis enim et erat pellentesque, vitae interdum dui hendrerit. Morbi odio erat, tempor at consequat sed, tincidunt id purus. Nam hendrerit ante ante. Ut gravida felis id erat mattis ullamcorper. Donec ut mi ipsum. Pellentesque volutpat condimentum ultrices.
      <br><br>
      Suspendisse malesuada ex id lorem facilisis, et cursus nulla mollis. Ut semper ex quis ipsum luctus, varius auctor lacus dapibus. Integer in hendrerit nunc, sed pulvinar arcu. Aenean lacinia porta sapien a elementum. Donec varius euismod libero ut rhoncus. Ut sed est iaculis, molestie velit vel, tempus mauris. Pellentesque dictum viverra odio a vehicula. Duis in tellus a dui venenatis vestibulum quis sed risus. Pellentesque vitae egestas ante. Praesent in laoreet elit, at maximus velit. Vestibulum interdum ornare mauris non venenatis. Suspendisse egestas tempor ligula, quis sagittis nisi pulvinar non.
    </p>
  </div>
<div class= "row">
      <q-card class="card-image">
      <q-img src="../assets/Pipi-mimi.png">
        <div class="absolute-bottom text-subtitle2 text-center">
          Millicent &amp; Pieter
        </div>
      </q-img>
    </q-card>

      <q-card class="card-image">
      <q-img src="../assets/Pipi-mimi2.png">
        <div class="absolute-bottom text-subtitle2 text-center">
          Millicent &amp; Pieter
        </div>
      </q-img>
    </q-card>

      <q-card class="card-image">
      <q-img src="../assets/Pipi-mimi3.png">
        <div class="absolute-bottom text-subtitle2 text-center">
          Millicent &amp; Pieter
        </div>
      </q-img>
    </q-card>
</div>
</q-page>
</template>

<script>

export default {
  name: 'About',
}
</script>

<style>
.header-image {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
.text-about {
  text-align: justify;
  margin: auto;
  width: 60%;
  padding: 25px 50px 75px 100px;
}
.gallery.images {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}
.card-image {
  margin: auto;
  width: 250px;
  align-content: center;
  align-items: center;
}

</style>
