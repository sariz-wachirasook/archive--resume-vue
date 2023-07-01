<template>
  <div>
    <section class="mb-5">
      <Card class="bg-transparent shadow-transparent">
        <div class="flex flex-col-reverse gap-10 align-middle md:flex-row">
          <div class="flex flex-col align-middle justify-center">
            <h1 class="md:text-7xl text-5xl">Sariz Wachirasook</h1>
            <hr class="my-3" />
            <div class="flex justify-between flex-wrap">
              <p class="text-xl">Software Engineer</p>
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
        <hr />
        <Card>
          <H2>Payment Integrations</H2>
          <div class="inline-flex flex-wrap gap-2">
            <Tag v-for="(item, index) in payments" :key="index" :tag="item" />
          </div>
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
  '<i class="fa-brands fa-react"></i> React.js',
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
    description: `<p>- Extensive experience in e-commerce, e-learning, and developing custom software solutions.</p><p>- Proficient as a Full Stack Developer, adept at working on both frontend and backend development, as well as infrastructure setup.</p><p>- Successfully mentored and supervised nearly 7 interns over a span of 2 years.</p>`,
    logo: 'https://lh5.googleusercontent.com/-W7Ibrkqhtdw/AAAAAAAAAAI/AAAAAAAAAAA/h4Dj9NFL6NU/s44-p-k-no-ns-nd/photo.jpg',
    link: 'https://outsourcify.net/',
  },
  {
    title: 'Freelance as WordPress Developer',
    date: '2022 - Present',
    description: `<p>- Proficient in developing custom WordPress themes and WooCommerce solutions.</p><p>- Experienced in managing infrastructure and assisting teams with deploying WordPress on platforms such as Cloudways and DigitalOcean.</p>`,
    logo: 'data:image/png;base64,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',
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
    description: 'Experienced in teaching the MEVN stack (MongoDB, Express.js, Vue.js, Node.js) through a concise 3-day course.',
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

const description = `Better describe as Full Stack Developer within 3 years of experience, proficient in multiple programming languages such as JavaScript, PHP and mostly popular framework such as React.js, Nuxt.js, Symfony, Laravel, Nest.js. Can help drive your business forward with new technology and new ideas with development experience in e-commerce, e-learning, and custom software development solutions.`;

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
