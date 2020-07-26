<template>
  <b-container class="about">
    <b-row class="justify-content-center">
      <b-col sm="12" md="10" lg="9" xl="9">
        <div class="about__image-wrapper">
          <img :src="require('@/assets/me2.jpg')" alt />
        </div>
        <div class="about__title">
          <div class="name">
            Padelis Theodosiou
            <img
              src="../assets/greece-flag-icon-64.png"
              alt="Greece flag"
              class="flag"
            />
          </div>
          <div class="job-title">Software Developer</div>
        </div>

        <div class="about__content">
          <p>Hi, my name is Padelis Theodosiou. I'm a software developer based in Thessaloniki, Greece. I designed this tool as an attempt to fight the spread of misinformation in a time where the facts and integrity of what we share with each other are critically important.</p>

          <p>In this historical moment, how we act and when we act, will be the deciding factor in how we shape our future.</p>

          <p>My goal is to provide context by easily displaying facts and figures published by governments and organizations all around the world.</p>
        </div>

        <div class="about__footer">
          <div class="email">
            <a
              href="mailto:padelis.theodosiou@gmail.com"
              target="_blank"
            >padelis.theodosiou@gmail.com</a>
          </div>

          <div class="social">
            <a
              v-for="(s,i) in socials"
              :key="i"
              :href="s.url"
              class="item"
              :class="s.class"
              target="_blank"
            >
              <span :class="s.icon"></span>
            </a>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "about",
  data: () => ({
    socials: [
      {
        icon: "fab fa-facebook",
        class: "facebook",
        url: "https://www.facebook.com/padelis.theodosiou/",
      },
      {
        icon: "fab fa-linkedin",
        class: "linkedin",
        url: "https://www.linkedin.com/in/padelis-theodosiou/",
      },
      {
        icon: "fab fa-instagram",
        class: "instagram",
        url: "https://www.instagram.com/padelis_theodosiou/",
      },
      {
        icon: "fab fa-twitter",
        class: "twitter",
        url: "https://twitter.com/ThPadelis",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.about {
  .about__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  .about__title {
    text-align: center;
    margin-bottom: 20px;

    .name {
      font-size: 2.5em;
      font-weight: 600;

      .flag {
        width: 1.3em;
        border-radius: 5px;
      }
    }

    .job-title {
      font-size: 1.75em;
      color: $blue-60;
    }
  }

  .about__content {
    font-size: 18px;
    line-height: 26px;

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  .about__footer {
    margin-top: 20px;
    text-align: center;

    .email {
      a {
        font-size: 1.75em;
        color: $danger;

        &:hover {
          text-decoration: none;
          color: lighten($color: $danger, $amount: 5);
        }
      }
    }

    .social {
      margin-top: 20px;

      .item {
        font-size: 2.5em;
        color: $blue-10;
        text-decoration: none;

        &:not(:last-of-type) {
          margin-right: 15px;
        }

        &:hover {
          &.facebook {
            color: #3b5998;
          }
          &.linkedin {
            color: #0077b5;
          }
          &.instagram {
            background: -webkit-linear-gradient(
              top,
              #405de6,
              #5851db,
              #833ab4,
              #c13584,
              #e1306c,
              #fd1d1d,
              #f56040,
              #f77737,
              #fcaf45,
              #ffdc80
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          &.twitter {
            color: #1da1f2;
          }
        }
      }
    }
  }
}
</style>