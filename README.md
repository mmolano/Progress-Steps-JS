### Installing

**Step 1:** Download the folder
```
git clone https://github.com/mmolano/Progress-Steps-JS.git
```

**Step 2 [Optional]:** Change branch
```
git checkout dev
```

## Quality Test

**Stylelint:** check if scss files respect project coding standards (.stylelintrc.json)
```
npm run codeCheck
```

## USAGE

**1:** Import progressBar functions
```
import {mobileProgress, progress} from "./progress";
```

**2:** Copy the html inside index.html

**3:** Add the following functions in the on click event (your function)
```
mobileProgress(false, 2); -> responsive | false if you are clicking on the previous button
mobileProgress(true, 2); -> put true if you are clicking on the next button
progress(false, 2); -> non responsive
```


## Useful commands (for more check package.json)
**1:** webPack
```
npm run webpackDev 
or
npm run webpackDev-watch
```
**2:** compile sass
```
npm run scssComp
```

## Built With

* [JS] - Language used

## Authors

Project done by :

* **[Developer Full-Stack] Miguel Molano** (miguel.molanopro@gmail.com)
