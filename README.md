# Learning Angular 8

Just one of the things I'm learning. <https://github.com/hchiam/learning>

DesignCourse tutorial I'm following:

- <https://www.youtube.com/watch?v=_TLhUCjY9iA>
- or <https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course>

(Re)-run `npm install -g @angular/cli` to make sure the `ng` command is up to date.

Aside: You can run `np help` to get a list of available commands for the Angular CLI tool.

## Start up commands

```bash
node -v
npm -v
npm install -g @angular/cli
ng help
ng new myapp
# routing? y
# SCSS
cd myapp
ng serve -o
# automatically opens and hot-reloads http://localhost:4200
```

```bash
# Control+C
ng build --prod
```

## Folder structure

```text
myapp
  e2e
  node_modules
  src
    app <-- you'll spend most of your time here on components and routing
    ..app.component.ts <-- main heart component
    assets
    environments
    ..index.html <-- here be the entry point <app-root>, but usually not doing work here
    ..styles.scss <-- global styles go here
```

## `app.component.ts`

`@Component({...})` is the component decorator, which is set up to connect to the component tag (e.g. `<app-root>`), the HTML file (e.g. `app.component.html`), and the CSS file (e.g. `app.component.scss`).

## Routing

```bash
cd myapp
# ng generate component <component-name>, or just:
ng g c home
ng g c list
```

Keep `<router-outlet></router-outlet>` in HTML inside `myapp/src/app/app.component.html`.

## Groups of files

`ng g c <component-name>` generates 4 files:

```text
.ts      = brain
.html    = structure
.scss    = style
.spec.ts = test
```

## Services

= special components that are reusable throughout your app

```bash
cd myapp
# ng generate service <service-name>
ng g s http
```

## Aside CSS note

```css
.container {
  display: flex; /* automatically fills up a row */;
  flex-wrap: wrap; /* to automatically create new rows */
  /* to wrap columns instead, change flex-direction and make sure height is bounded: */
  /* flex-direction: column; */
  /* height: 100vh; */
}
```

## Build for production (`dist` folder)

```bash
cd myapp
ng build --prod
```

To run the production build on a local server, you can try:

```bash
cd myapp
# (stop any other running local server)
npm i -g lite-server
cd dist/myapp
lite-server
```
