$(".DesignChoice")
  .off("click")
  .on("click", function () {
    $(".DesignChoice").removeClass("checked");
    $("#" + this.id).addClass("checked");

    switch (this.id) {
      case "DesignChoice1":
        $(".textTitleForm").html("Logo");
        $(".formOrder").html(`
            <input
            style="display: none"
            type="text"
            name="TypeCommande"
            id="TypeCommande"  
            value="Logo"          
          />
            <div class="form-group fg2">
            <div class="field">
              <input type="text" name="name" placeholder="Name" required />
              <i class="fas fa-user"></i>
            </div>
            <div class="field">
              <input
                type="text"
                name="company"
                placeholder="Brand/Company name
              "
                required
              />
              <i class="fas fa-building"></i>
            </div>
            <div class="field">
              <input type="text" name="domain" placeholder="Domain" />
              <i class="fas fa-industry"></i>
            </div>

            <!--  -->

            <div class="message">
              <textarea placeholder="Description" name="description"></textarea>
              <i class="fas fa-comment-dots"></i>
            </div>
          </div>
          <!--  -->
          <div class="form-group fg2">
            <div class="field">
              <input type="text" name="email" placeholder="Email" />
              <i class="fas fa-envelope"></i>
            </div>
            <div class="field">
              <input type="text" name="phone" placeholder="Phone" required />
              <i class="fas fa-phone-alt"></i>
            </div>
          </div>
          <div class="button-area">
            <button type="submit">
              Submit <i class="fa fa-paper-plane"></i>
            </button>
          </div>`);
        break;
      case "DesignChoice2":
        $(".textTitleForm").html("business card");
        $(".formOrder").html(`
            <input
            style="display: none"
            type="text"
            name="TypeCommande"
            id="TypeCommande"
            value="Business Card"
          />
            <div class="form-group fg2">
            <div class="field">
              <input type="text" name="name" placeholder="Name" required />
              <i class="fas fa-user"></i>
            </div>
            <div class="field">
              <input
                type="text"
                name="company"
                placeholder="Brand/Company name
              "
                required
              />
              <i class="fas fa-building"></i>
            </div>
            <div class="field">
              <input type="text" name="domain" placeholder="Domain" />
              <i class="fas fa-industry"></i>
            </div>

            <!--  -->

            <div class="message">
              <textarea placeholder="Description" name="description"></textarea>
              <i class="fas fa-comment-dots"></i>
            </div>
          </div>
          <!--  -->
          <div class="form-group fg2">
            <div class="field">
              <input type="text" name="email" placeholder="Email" />
              <i class="fas fa-envelope"></i>
            </div>
            <div class="field">
              <input type="text" name="phone" placeholder="Phone" required />
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="field">
                <input type="text" name="Instagram" placeholder="Instagram" />
                <i class="fab fa-instagram"></i>
            </div>
            <div class="field">
                <input type="text" name="Facebook" placeholder="Facebook" />
                <i class="fab fa-facebook"></i>
            </div>
            <div class="field">
                <input type="text" name="OtherSocialmedia" placeholder="Other Social media" />
                <i class="fas fa-share-alt"></i>
            </div>
          </div>
          <div class="button-area">
            <button type="submit">
              Submit <i class="fa fa-paper-plane"></i>
            </button>
          </div>`);
        break;

      case "DesignChoice3":
        $(".textTitleForm").html("Other");
        $(".formOrder").html(`
            <input
            style="display: none"
            type="text"
            name="TypeCommande"
            id="TypeCommande"
            value="Other"
          />
            <div class="form-group fg2">
        <div class="field">
        <input type="text" name="name" placeholder="Name" required />
        <i class="fas fa-user"></i>
        </div>

        <div class="field">
        <input type="text" name="title" placeholder="Type (Flyer, Poster...)" />
        <i class="fas fa-info-circle"></i>
        </div>

        <!--  -->

        <div class="message">
        <textarea placeholder="Description" name="description"></textarea>
        <i class="fas fa-comment-dots"></i>
        </div>
        </div>
        <!--  -->
        <div class="form-group fg2">
        <div class="field">
        <input type="text" name="email" placeholder="Email" />
        <i class="fas fa-envelope"></i>
        </div>
        <div class="field">
        <input type="text" name="phone" placeholder="Phone" required />
        <i class="fas fa-phone-alt"></i>
        </div>
        </div>
        <div class="button-area">
        <button type="submit">
        Submit <i class="fa fa-paper-plane"></i>
        </button>
        </div>`);

        break;
    }
  });
