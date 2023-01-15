<template>
  <div>
    <section class="mb-10">
      <Card class="bg-transparent shadow-transparent">
        <div class="flex gap-10 align-middle">
          <div class="flex flex-col align-middle justify-center">
            <h1 class="md:text-7xl text-5xl">Sariz Wachirasook</h1>
            <hr class="my-3" />
            <div class="flex justify-between">
              <p class="text-xl">Software Engineer</p>
              <a href="mailto:sariz.wachirasook@gmail.com" class="text-xl text-gray-500">sariz.wachirasook@gmail.com</a>
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
          <H2>About Me</H2>
          <p>
            Full-stack developer with 3 years of experience. I'm currently working at
            <a href="https://www.thesoftwaresimple.com/">The Software Simple</a> as a full-stack
            developer.
          </p>
        </Card>

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
            <Tag v-for="(item, index) in backend" :key="index" :tag="item" />
          </div>
        </Card>

        <Card>
          <H2>Infrastructure</H2>
          <div class="inline-flex flex-wrap gap-2">
            <Tag v-for="(item, index) in iaas" :key="index" :tag="item" />
          </div>
        </Card>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <!-- <Card>
        <H2>Contacts</H2>
        <List :items="contacts" />
      </Card>

      <Card>
        <H2>Language</H2>
        <List :items="languages" />
      </Card> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const frontend = ref(['HTML5', 'SCSS', 'JavaScript', 'jQuery', 'Vue.js', 'Nuxt.js']);

const backend = ref([
  'Symfony',
  'API Platform',
  'Magento',
  'MySQL (MariaDB, MySQL, PostgreSQL)',
  'Redis',
  'Node.js',
  'Express.js',
  'Prisma',
]);

const iaas = ref([
  'AWS',
  'Azure',
  'Linode',
  'Vultr',
  'Heroku',
  'Netlify',
  'Firebase',
  'DigitalOcean',
  'Cloudflare',
  'Stripe',
  'PayPal',
  'SendGrid',
  'Google Cloud',
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
