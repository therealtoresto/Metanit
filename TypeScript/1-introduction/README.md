#### TypeScript

Command Line Interface commands:

Project initialization:
```
tsc init
```

Auto compiling:
```
tsc -w app.js
```

ECMAScript version compiling:
```
tsc app.ts -t ES2020
```

Comments removing:
```
tsc app.ts --removeComments
```

Set directory:
```
tsc --outDir /Users/user/ts
```

Compare files:
```
tsc --outFile output.js app.ts hello.ts
```

Module type:
```
tsc -m commonjs app.ts
```

Few params:
```
tsc -t ES5 --outDir js -m commonjs app.ts
```

Help:
```
tsc -h
```
