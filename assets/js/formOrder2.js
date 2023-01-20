$(".DesignChoice")
  .off("click")
  .on("click", function () {
    $(".DesignChoice").removeClass("checked");
    $("#" + this.id).addClass("checked");

    switch (this.id) {
      case "DesignChoice1":
        $(".textTitleForm").html("E-commerce");
        $("#contact-form").html(`
            <input
            style="display: none"
            type="text"
            name="TypeCommande"
            id="TypeCommande"  
            value="WebSite E-commerce"          
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
        $(".textTitleForm").html("Blog");
        $("#contact-form").html(`
            <input
            style="display: none"
            type="text"
            name="TypeCommande"
            id="TypeCommande"
            value="WebSite Blog"
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

      case "DesignChoice3":
        $(".textTitleForm").html("Other");
        $("#contact-form").html(`
            <input
            style="display: none"
            type="text"
            name="TypeCommande"
            id="TypeCommande"
            value="WebSite Other"
          />
            <div class="form-group fg2">
        <div class="field">
        <input type="text" name="name" placeholder="Name" required />
        <i class="fas fa-user"></i>
        </div>

        <div class="field">
        <input type="text" name="title" placeholder="Type (Portfolio, Business website...)" />
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
