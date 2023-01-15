<template>
  <div class="grid grid-cols-[2fr,1fr] gap-4">
    <div class="grid grid-cols-1 gap-4">
      <Card>
        <H2>Summary</H2>
        <p>
          I'm a full-stack developer with 3 years of experience. I'm currently working at
          <a href="https://www.thesoftwaresimple.com/">The Software Simple</a> as a full-stack
          developer.
        </p>
      </Card>

      <Card>
        <H2>Experiences</H2>
        <TimeLine :items="experiences" />
      </Card>

      <Card>
        <H2>Frontend</H2>
        <div>
          <Tag v-for="(item, index) in frontend" :key="index" :tag="item" />
        </div>
      </Card>

      <Card>
        <H2>Frontend</H2>
        <div>
          <Tag v-for="(item, index) in frontend" :key="index" :tag="item" />
        </div>
      </Card>

      <Card>
        <H2>Infrastructure</H2>
        <Tag v-for="(item, index) in iaas" :key="index" :tag="item" />
        <Tag v-for="(item, index) in paas" :key="index" :tag="item" />
        <Tag v-for="(item, index) in saas" :key="index" :tag="item" />
      </Card>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <Card>
        <H2>Contacts</H2>
        <List :items="contacts" />
      </Card>

      <Card>
        <H2>Language</H2>
        <List :items="languages" />
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
const frontend = ref([
  'HTML',
  'CSS',
  'JavaScript',
  'Vue.js',
  'Express.js',
  'PostgreSQL',
  'Git',
  'GitHub',
  'Heroku',
  'Netlify',
]);

const backend = ref([
  'PHP',
  'Laravel',
  'MySQL',
  'MongoDB',
  'Redis',
  'Node.js',
  'Express.js',
  'Prisma',
]);

const iaas = ref(['DigitalOcean', 'AWS', 'Google Cloud', 'Azure', 'Linode', 'Vultr', 'Cloudflare']);

const paas = ref(['Heroku', 'Netlify', 'Vercel', 'Firebase', 'AWS', 'DigitalOcean', 'Cloudflare']);

const saas = ref(['Stripe', 'PayPal', 'SendGrid', 'AWS', 'Google Cloud']);

const experiences = ref([
  {
    title: 'Full-stack developer',
    company: 'The Software Simple',
    date: '2021 - Present',
    description: 'Working on a project for a client.',
  },
  {
    title: ' developer',
    company: 'The Software Simple',
    date: '2020 - 2021',
    description: 'Working on a project for a client.',
  },
  {
    title: 'Work at Outsourcify, Co., Ltd. as a full-stack developer',
    company: 'The Software Simple',
    date: '2019 - 2020',
    description: 'Working on a project for a cli.ent',
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
