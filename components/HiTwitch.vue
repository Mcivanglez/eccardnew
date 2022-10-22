<template>
  <div class="p-4">
    <div class="grid">
      <div class="col-5">
        <div class="flex justify-content-center pt-5">
          <div class="card shadow-8 bg-white border-round p-5">
            <h2 class="text-center p-3 green-t">
              Sign Up
            </h2>
            <form class="p-fluid">
              <div class="field">
                <div class="p-float-label">
                  <InputText id="name" placeholder="Name" />
                </div>
              </div>
              <div class="field">
                <div class="p-float-label p-input-icon-right">
                  <InputText id="email" aria-describedby="email-error" placeholder="E-mail" />
                </div>
              </div>
              <div class="field">
                <div class="p-float-label p-input-icon-right">
                  <Password id="pass" placeholder="Password" />
                </div>
              </div> <div class="field">
                <div class="p-float-label p-input-icon-right">
                  <Password id="passC" placeholder="Confirm your password" />
                </div>
              </div>
              <Button type="submit" label="Register" class="mt-2 bcg" />
              <div class="field-checkbox pt-2">
                <Checkbox id="accept" />
                <label for="accept">Al hacer click en registrarse, confirmas que estas <br>
                  de acuerdo y aceptas la política de privacidad y <br>
                  los términos de uso.</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-7 flex flex-wrap align-content-center justify-content-center">
        <img src="/images/fondo.png" class="img bci p-1" alt="Image Text">
        <img src="/images/op.png" class="img bci p-1" alt="Image Text">
        <h1 class="text">
          <p> ¡Bienvenidos a EcCard! </p>
          <p> La plataforma E-Business </p>
          <p> que estas esperando para </p>
          <p> cambiar la forma de hacer negocios.</p>
        </h1>
      </div>
    </div>
    <div class="grid bcg mt-5">
      <div class="col-5 flex flex-wrap align-content-center justify-content-center">
        <div class="p-4">
          <h1 class="text2 pl-8">
            NUESTRA PLATAFORMA
          </h1>
          <br>
          <br>
          <h2 class="text2 pl-8">
            EcCard® es una plataforma <br>
            E-Business con la que
            puedes promover tus servicios
            con una lógica de negocios. <br>
            <br>
            <br>
            <Button class="p-button-outlined p-button-rounded green bc" label="Sign Up" />
          </h2>
        </div>
      </div>
      <div class="col-7 p-5">
        <iframe
          width="760"
          height="515"
          class="bor"
          src="https://www.youtube.com/embed/qEL17ZSdKbY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
    <div class="grid mt-5 flex flex-wrap">
      <div class="col-12">
        <h1 class="text-center green-t p-7">
          TODO LO NECESARIO PARA TU NEGOCIO
        </h1>
      </div>
      <div class="grid w-full">
        <div class="col-4 flex flex-column justify-content-center align-items-center">
          <img src="/images/tarjetas.png" class="img" width="150" height="150" alt="Image Text">
          <h3 class="green-t pt-3">
            Tarjetas de
            presentación
            100% digitales
          </h3>
        </div>
        <div class="col-4 flex flex-column justify-content-center align-items-center">
          <img src="/images/tarjetas.png" class="img" width="150" height="150" alt="Image Text">
          <h3 class="green-t pt-3">
            Tarjetas de
            presentación
            100% digitales
          </h3>
        </div>
        <div class="col-4 flex flex-column justify-content-center align-items-center">
          <img src="/images/tarjetas.png" class="img" width="150" height="150" alt="Image Text">
          <h3 class="green-t pt-3">
            Tarjetas de
            presentación
            100% digitales
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .bor {
    border-radius: 15px;
  }
  .text2 {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
  }
  .text {
    margin-top: 180px;
    position:absolute;
    text-align: center;
    color: #fff;
    margin-left: -80px;
    font-size:40px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .bcg {
    background-color: #578D6F;
    border-color: #578D6F;
  }
  .bci {
    max-width: 70%;
    position: absolute;
    opacity: .7;
    z-index: -1;
    margin-left: -80px;
  }
  .green {
    background-color: #578D6F;
  }
  .green-t {
    color: #578D6F;
    font-family: Arial, Helvetica, sans-serif;
  }
  .hi {
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
