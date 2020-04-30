let authFlag = false;
function toggleView() {
  authFlag = authFlag === true ? false : true;
  const nameInput = authFlag
    ? `<div class="input-group">
          <span class="input-group-addon"><i class="fa fa-pencil "></i></span>
          <input type="text" class="form-control" name="name" placeholder="Nombre de usuario: ...">
        </div>`
    : '';
  const verifyInput = authFlag
    ? `<div class="input-group">
          <span class="input-group-addon"><i class="fa fa-lock "></i></span>
          <input type="password" class="form-control" name="verify" placeholder="Repite Contraseña...">
        </div>`
    : '';

  const errorHandleBars = `<div>
{{{#if error}}}
<h2 style="color: #17a2b0;">{{error}}cosoo</h2>
{{/if}}
<h2 style="color: #17a2b0;">{{message}}cosos</h2>
<div>`;

  document.querySelector('.stylish-form').innerHTML =
    `<div class="SIGN_UP row mar20 visible" >
<div class="col-md-12 col-sm-12 col-xs-12">
  <div class="inner-section">
    <form method="POST" action="${authFlag ? '/signup ' : '/login'}">
      <div class="mar20 inside-form">
        <h2 class="font_white text-center">${authFlag ? 'SIGN UP' : 'LOG IN'}</h2>
        <ul>
          <li class="icon-holder dsp-flex">
            <a class="icon-holder dsp-flex" href="/auth/google"> <i class="fa fa-google"></i></a>
          </li>
          <li class="icon-holder dsp-flex">
            <a class="icon-holder dsp-flex" href="/auth/facebook"> <i class="fa fa-facebook"></i></a>
          </li>
        </ul>` +
    nameInput +
    `<div class="input-group">
          <span class="input-group-addon"><i class="fa fa-envelope "></i></span>
          <input type="email" class="form-control" name="email" placeholder="Correo electrónico:...">
        </div>
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-lock "></i></span>
          <input type="password" class="form-control" name="password" placeholder="Contraseña:...">
        </div>` +
    verifyInput +
    errorHandleBars +
    `<div class="footer text-center">
          <input type="submit" class="btn btn-neutral btn-round btn-lg" value="${
            authFlag ? 'SIGN UP' : 'LOG IN'
          }"></a>
          <input type="button" onclick="toggleView()" class="btn btn-neutral btn-round btn-lg" value="${
            !authFlag ? 'SIGN UP' : 'LOG IN'
          }">

         </button>
        </div>
      </div>
    </form>
  </div>
</div>
</div>`;
}
toggleView();
