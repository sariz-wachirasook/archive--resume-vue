<template>
  <div>
    <section class="mb-10">
      <Card class="bg-transparent shadow-transparent">
        <div class="flex flex-col-reverse gap-10 align-middle md:flex-row">
          <div class="flex flex-col align-middle justify-center">
            <h1 class="md:text-7xl text-5xl">Sariz Wachirasook</h1>
            <hr class="my-3" />
            <div class="flex justify-between flex-wrap">
              <p class="text-xl">Senior Software Engineer</p>
              <a href="mailto:sariz.wachirasook@gmail.com" class="text-xl text-gray-500"
                >sariz.wachirasook@gmail.com</a
              >
            </div>
          </div>
          <Avatar class="md:ml-auto" src="/images/avatar.webp" />
        </div>
      </Card>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
      <div class="grid grid-cols-1 gap-4">
        <Card>
          <H2>Experiences</H2>
          <TimeLine :items="experiences" />
        </Card>

        <Card>
          <H2>Educations</H2>
          <TimeLine :items="educations" />
        </Card>

        <Card>
          <H2>Frontend Skills</H2>
          <div class="inline-flex flex-wrap gap-2">
            <Tag v-for="(item, index) in frontend" :key="index" :tag="item" />
          </div>
        </Card>

        <Card>
          <H2>Backend Skills</H2>
          <div class="inline-flex flex-wrap gap-2">
            <Tag
              v-for="(item, index) in backend"
              :key="index"
              :tag="item"
              icon="fa-brands fa-github"
            />
          </div>
        </Card>

        <Card>
          <H2>Infra sturcture and more</H2>
          <div class="inline-flex flex-wrap gap-2">
            <Tag v-for="(item, index) in iaas" :key="index" :tag="item" />
          </div>
        </Card>

        <Card>
          <H2>Payment Integrations</H2>
          <div class="inline-flex flex-wrap gap-2">
            <Tag v-for="(item, index) in payments" :key="index" :tag="item" />
          </div>
        </Card>
      </div>

      <div class="flex flex-col gap-4">
        <Card>
          <H2>About Me</H2>
          <p class="text-gray-900">{{ description }}</p>
        </Card>

        <Card>
          <!-- contact -->
          <H2>Contacts</H2>

          <ul>
            <li class="flex justify-center gap-2">
              <strong class="text-gray-900">Email</strong>
              <a href="mailto:sariz.wachirasook@gmail.com" class="text-gray-500"
                >sariz.wachirasook@gmail.com</a
              >
            </li>
            <li class="flex justify-center gap-2">
              <strong class="text-gray-900">Phone</strong>
              <span class="text-gray-500">+66 623249451</span>
            </li>
          </ul>
        </Card>

        <Card>
          <!-- contact -->
          <H2>Language</H2>
          <ul>
            <li class="flex justify-between">
              <strong class="text-gray-900">English</strong>
              <span class="text-gray-500">Intermediate</span>
            </li>
            <li class="flex justify-between">
              <strong class="text-gray-900">Thai</strong>
              <span class="text-gray-500">Native</span>
            </li>
          </ul>
        </Card>

        <Card>
          <!-- soft skill -->
          <H2>Soft Skills</H2>
          <ul>
            <li class="flex justify-between">
              <strong class="text-gray-900">Leadership</strong>
              <span class="text-gray-500">Can do</span>
            </li>
            <li class="flex justify-between">
              <strong class="text-gray-900">Communication</strong>
              <span class="text-gray-500">I'm Ambivert</span>
            </li>
            <li class="flex justify-between">
              <strong class="text-gray-900">Teamwork</strong>
              <span class="text-gray-500">Friendly</span>
            </li>
            <li class="flex justify-between">
              <strong class="text-gray-900">Problem Solving</strong>
              <span class="text-gray-500">Logical Guy</span>
            </li>
            <li class="flex justify-between">
              <strong class="text-gray-900">Time Management</strong>
              <span class="text-gray-500">Good</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const frontend = ref([
  '<i class="fa-brands fa-html5"></i> HTML5',
  '<i class="fa-solid fa-code"></i> Twig',
  '<i class="fa-solid fa-code"></i> Pug',
  '<i class="fa-brands fa-sass"></i> SCSS',
  '<i class="fa-brands fa-js"></i> JavaScript',
  '<i class="fa-brands fa-js"></i> jQuery',
  '<i class="fa-brands fa-vuejs"></i> Vue.js',
  '<i class="fa-brands fa-vuejs"></i> Nuxt.js',
  'GSAP',
]);

const backend = ref([
  '<i class="fa-brands fa-php"></i> PHP',
  '<i class="fa-brands fa-symfony"></i> Symfony',
  'API Platform',
  '<i class="fa-brands fa-magento"></i> Magento',
  '<i class="fa-solid fa-database"></i> Redis',
  '<i class="fa-brands fa-node-js"></i> Node.js',
  '<i class="fa-solid fa-database"></i> MySQL (MariaDB, MySQL, PostgreSQL)',
  '<i class="fa-brands fa-wordpress"></i> WordPress',
  '<i class="fa-brands fa-wordpress"></i> WooCommerce',
  'Sylius',
  'Express.js',
  'Prisma',
]);

const iaas = ref([
  '<i class="fa-brands fa-aws"></i> AWS',
  '<i class="fa-brands fa-linode"></i> Linode',
  'Vultr',
  'Heroku',
  'Netlify',
  'Firebase',
  '<i class="fa-brands fa-digital-ocean"></i> DigitalOcean',
  '<i class="fa-brands fa-digital-ocean"></i> CloudWays',
  '<i class="fa-brands fa-cloudflare"></i> Cloudflare',
  '<i class="fa-solid fa-envelope"></i> SendGrid',
  '<i class="fa-brands fa-google"></i> Google Cloud',
]);

const payments = ref([
  '<i class="fas fa-money-bill-wave"></i> OPN Payment (Omise)',
  '<i class="fa-brands fa-paypal"></i> PayPal',
  '<i class="fas fa-money-bill-wave"></i> Klarna',
]);

const experiences = ref([
  {
    title: 'Senior Software Engineer',
    company: 'Outsourcify Co., Ltd',
    date: '2020 - Present',
    description: `<p>- Experience in e-commerce, e-learning, and custom software development solutions.</p><p>- Full Stack Developer, Work on Frontend, Backend, and Infrastructure</p><p>- Teach almost 7 internship in 2 years</p>`,
    logo: 'https://lh5.googleusercontent.com/-W7Ibrkqhtdw/AAAAAAAAAAI/AAAAAAAAAAA/h4Dj9NFL6NU/s44-p-k-no-ns-nd/photo.jpg',
    link: 'https://outsourcify.net/',
  },
  {
    title: 'Tester & Front-end (part time)',
    company: 'Mae Fah Luang University',
    date: '2019',
    description: 'Working on a project for a client',
    logo: 'https://pr.mfu.ac.th/fileadmin/_processed_/8/7/csm_logo_mfu_3d_colour_0171307b6d.png',
    link: 'https://en.mfu.ac.th/',
  },
  {
    title: 'Trainer @Hackathon',
    company: 'Mae Fah Luang University',
    date: '2018',
    description: 'Teach MEVN stack, with short course 3 days',
    logo: 'https://pr.mfu.ac.th/fileadmin/_processed_/8/7/csm_logo_mfu_3d_colour_0171307b6d.png',
    link: 'https://en.mfu.ac.th/',
  },
  {
    title: 'Attendants',
    company: 'Mae Fah Luang University',
    date: '2018 - 2019',
    description:
      '<p>- Startup Thailand League 2018, 2019</p><p>- Business Brotherhood (Startup)</p>',
    logo: 'https://pr.mfu.ac.th/fileadmin/_processed_/8/7/csm_logo_mfu_3d_colour_0171307b6d.png',
    link: 'https://en.mfu.ac.th/',
  },
]);

const description = `Hi, I'm Senior Software Engineer with 3 years of experience. I'm currently working at Outsourcify Co., Ltd. I'm a self-taught developer who loves to learn & teach new things to my internship. If you have any questions or want to talk about technology archetecture with me, feel free to contact me.`;

const contacts = ref([
  {
    title: 'Email',
    link: 'as',
  },
]);

const languages = ref([
  {
    title: 'Thai',
    level: 'Native',
  },
  {
    title: 'English',
    level: 'Intermediate',
  },
]);

const educations = ref([
  {
    title: 'Bachelor of Science in Software Engineering',
    company: 'Mae Fah Luang University',
    date: '2016 - 2019',
    logo: 'https://pr.mfu.ac.th/fileadmin/_processed_/8/7/csm_logo_mfu_3d_colour_0171307b6d.png',
    link: 'https://en.mfu.ac.th/',
  },
]);
</script>

<style>
body {
  /* popins */
  font-family: 'Poppins', sans-serif;
}
</style>
