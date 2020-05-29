# Strapi Starter Nuxt Blog

Strapi+nuxt创建的博客网站.

它是完全可定制的，而且由于它是开源的，完全开放支持添加新功能等 ...

You may want to know how to develop such a starter by your own! This starter is actually the result of this [tutorial](https://strapi.io/blog/build-a-blog-using-nuxt-strapi-and-apollo)


### Getting started

**Clone the repository and install dependencies**

```bash
git clone https://github.com/strapi/strapi-starter-nuxt-blog.git
cd strapi-starter-nuxt-blog

# Using yarn
yarn setup:yarn

# Using npm
npm run setup:npm
```

### Scaffold your project

This command will launch both of your backend and frontend server and do a data migration in your backend server

```bash
# Using yarn
yarn build:yarn
yarn develop:yarn

# Using npm
npm run build:npm
npm run develop:npm
```

Alternatively, you can still start your servers separately:

### Start the backend server

```bash
cd backend

# Using yarn
yarn build
yarn develop

# Using npm
npm run build
npm run develop
```

### Start the frontend server

```bash
cd frontend

# Using yarn
yarn develop

# Using npm
npm run develop
```

Nuxt server is running here => [http://localhost:3000](http://localhost:3000)
Strapi server is running here => [http://localhost:1337](http://localhost:1337)

Enjoy this starter
