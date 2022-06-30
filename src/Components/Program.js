import React from "react";

export function Program() {
  return (
    <div className="background">
      <div class="container-sm">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b className="ceremony">
                  Important information: Before & After The Ceremony
                </b>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>
                  This is happening before & right after the ceremony
                </strong>{" "}
                <br />
                The ceremony will take place at the beach. Before heading to the
                beach, you can drop off items you don't want to hold onto at
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <b>Group Pictures We Want You To Be in</b>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong>{" "}
                <br />
                Donec imperdiet rutrum condimentum. Suspendisse nec convallis
                elit, quis gravida mauris. Fusce dui nisl, pharetra mollis est
                ac, porttitor consequat diam. Ut dignissim mi at ex bibendum
                ullamcorper. Praesent et tellus ligula. Pellentesque fermentum,
                lorem id vulputate fermentum, lacus dolor convallis elit, in
                convallis justo magna vel nulla. Quisque sit amet purus ac metus
                fermentum interdum facilisis at quam. Praesent dapibus tortor
                purus, quis congue nunc feugiat sit amet.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <b>General information</b>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
