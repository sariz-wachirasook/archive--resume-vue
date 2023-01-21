<template>
  <div>
    <section class="mb-10">
      <Card class="bg-transparent shadow-transparent">
        <div class="flex gap-10 align-middle">
          <div class="flex flex-col align-middle justify-center">
            <h1 class="md:text-7xl text-5xl">Sariz Wachirasook</h1>
            <hr class="my-3" />
            <div class="flex justify-between">
              <p class="text-xl">Senior Software Engineer</p>
              <a href="mailto:sariz.wachirasook@gmail.com" class="text-xl text-gray-500"
                >sariz.wachirasook@gmail.com</a
              >
            </div>
          </div>
          <Avatar
            class="ml-auto"
            src="https://outsourcify.net/wp-content/uploads/2022/04/Sariz-160x160-c-default.jpg"
          />
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
          <H2>Infrastructure</H2>
          <div class="inline-flex flex-wrap gap-2">
            <Tag v-for="(item, index) in iaas" :key="index" :tag="item" />
          </div>
        </Card>
      </div>

      <div class="flex flex-col gap-4">
        <Card class="bg-gray-100">
          <H2>About Me</H2>
          <p>{{ description }}</p>
        </Card>

        <Card>
          <!-- contact -->
          <H2>Contacts</H2>

          <ul>
            <li class="flex justify-center gap-2">
              <strong>Email</strong>
              <a href="mailto:sariz.wachirasook@gmail.com">sariz.wachirasook@gmail.com</a>
            </li>
            <li class="flex justify-center gap-2">
              <strong>Phone</strong>
              <span>+66 623249451</span>
            </li>
          </ul>
        </Card>

        <Card>
          <!-- contact -->
          <H2>Language</H2>
          <ul>
            <li class="flex justify-between">
              <strong>English</strong>
              <span>Intermediate</span>
            </li>
            <li class="flex justify-between">
              <strong>Thai</strong>
              <span>Native</span>
            </li>
          </ul>
        </Card>

        <Card>
          <!-- soft skill -->
          <H2>Soft Skills</H2>
          <ul>
            <li class="flex justify-between">
              <strong>Leadership</strong>
              <span>Beginner</span>
            </li>
            <li class="flex justify-between">
              <strong>Communication</strong>
              <span>Intermediate</span>
            </li>
            <li class="flex justify-between">
              <strong>Teamwork</strong>
              <span>Intermediate</span>
            </li>
            <li class="flex justify-between">
              <strong>Problem Solving</strong>
              <span>Intermediate</span>
            </li>
            <li class="flex justify-between">
              <strong>Time Management</strong>
              <span>Intermediate</span>
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
  '<i class="fa-brands fa-symfony"></i> Symfony',
  'API Platform',
  '<i class="fa-brands fa-magento"></i> Magento',
  '<i class="fa-solid fa-database"></i> MySQL (MariaDB, MySQL, PostgreSQL)',
  '<i class="fa-solid fa-database"></i> Redis',
  '<i class="fa-brands fa-node-js"></i> Node.js',
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
  '<i class="fa-brands fa-cloudflare"></i> Cloudflare',
  '<i class="fa-brands fa-stripe-s"></i> Stripe',
  '<i class="fa-brands fa-paypal"></i> PayPal',
  '<i class="fa-solid fa-envelope"></i> SendGrid',
  '<i class="fa-brands fa-google"></i> Google Cloud',
]);

const experiences = ref([
  {
    title: 'Full-Stack Developer',
    company: 'Outsourcify Co., Ltd',
    date: '2020 - Present',
    description: 'Experience in e-commerce, e-learning, and custom software development solutions.',
    logo: 'https://lh5.googleusercontent.com/-W7Ibrkqhtdw/AAAAAAAAAAI/AAAAAAAAAAA/h4Dj9NFL6NU/s44-p-k-no-ns-nd/photo.jpg',
    link: 'https://outsourcify.net/',
  },
  {
    title: 'Tester & Front-end (part time)',
    company: 'Mae Fah Luang University',
    date: '2019',
    description: 'Working on a project for a cli.ent',
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
    description: 'Startup Thailand League 2018, Business Brotherhood, ',
    logo: 'https://pr.mfu.ac.th/fileadmin/_processed_/8/7/csm_logo_mfu_3d_colour_0171307b6d.png',
    link: 'https://en.mfu.ac.th/',
  },
]);

const description = `Full-stack developer with 3 years of experience. I'm currently working at Outsourcify Co., Ltd. I'm a self-taught developer who loves to learn new things. I'm a fast learner and I'm always willing to learn new things. I'm a team player and I'm always willing to help my team members.`;

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
</script>

<style>
body {
  /* popins */
  font-family: 'Poppins', sans-serif;
}
</style>
