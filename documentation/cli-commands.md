# Exemplos de comandos

## how to prompt for a user input

```
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Hi, ${answer}!`);
  rl.close();
});
```

## how simulate a console

```
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('> ');
rl.prompt();

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  rl.prompt();
});

rl.on('close', () => {
  console.log('Exiting the simulation...');
});

```


## create a command to write a file

You can use the built-in fs module in Node.js to write a file. Here's an example of how to create a command using yargs that will write a file with some content:

```
import * as fs from 'fs';
import yargs from 'yargs';

const argv = yargs.command(
  'write [filename] [content]',
  'Write a file with some content',
  (yargs) => {
    yargs
      .positional('filename', {
        describe: 'The name of the file to write',
        type: 'string',
      })
      .positional('content', {
        describe: 'The content to write to the file',
        type: 'string',
      })
      .demandOption(['filename', 'content']);
  },
  (argv) => {
    fs.writeFile(argv.filename, argv.content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Wrote "${argv.content}" to ${argv.filename}`);
      }
    });
  }
).argv;

```

This code uses yargs to define a command called write that takes two positional arguments: filename and content. The filename argument specifies the name of the file to write, and the content argument specifies the content to write to the file. The demandOption method is used to make sure that both arguments are provided.

The second argument to the command method is a description of the command, and the third argument is a configuration object. In this case, we are using the positional method to define the two positional arguments, and then using a callback function to write the file using fs.writeFile. The writeFile method takes the filename, content, and a callback function that will be called when the write is complete. If there is an error, the error is logged to the console, and if the write is successful, a success message is logged to the console.

## write a command to write a java class with the method "process()" in the package br.com.teste

To write a Java class with a process() method in the package br.com.teste, you can use the fs module in Node.js to write the class to a file. Here's an example of how to create a command using yargs that will write a Java class with the specified package and method:

```
import * as fs from 'fs';
import yargs from 'yargs';

const argv = yargs.command(
  'write-class <classname>',
  'Write a Java class with the specified package and method',
  (yargs) => {
    yargs.positional('classname', {
      describe: 'The name of the Java class to write',
      type: 'string',
    });
  },
  (argv) => {
    const packageName = 'br.com.teste';
    const className = argv.classname;
    const content = `package ${packageName};

public class ${className} {
  public void process() {
    // Add your code here
  }
}`;

    const filename = `${className}.java`;

    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Wrote ${filename} to disk.`);
      }
    });
  }
).argv;

```


This code uses yargs to define a command called write-class that takes one positional argument: classname. The classname argument specifies the name of the Java class to write.

The second argument to the command method is a description of the command, and the third argument is a configuration object. In this case, we are using the positional method to define the classname positional argument, and then using a callback function to generate the Java class content and write it to a file.

The packageName and className variables are used to construct the package and class names for the Java class. The content variable contains the code for the Java class, including the process() method.

The filename variable is used to specify the name of the file to write the Java class to. The fs.writeFile method is then used to write the content to the specified file. If there is an error, the error is logged to the console, and if the write is successful, a success message is logged to the console.


## write a new command to include a new method in the class

To include a new method in the Java class created in the previous example, you can modify the existing write-class command to take an additional argument for the name of the new method. Here's an example of how to create a new command using yargs that will write a Java class with a new method:

```
import * as fs from 'fs';
import yargs from 'yargs';

const argv = yargs.command(
  'write-method <classname> <methodname>',
  'Write a Java class with a new method',
  (yargs) => {
    yargs.positional('classname', {
      describe: 'The name of the Java class to write',
      type: 'string',
    }).positional('methodname', {
      describe: 'The name of the new method',
      type: 'string',
    });
  },
  (argv) => {
    const packageName = 'br.com.teste';
    const className = argv.classname;
    const methodName = argv.methodname;
    const content = `package ${packageName};

public class ${className} {
  public void process() {
    // Add your code here
  }
  
  public void ${methodName}() {
    // Add your code here
  }
}`;

    const filename = `${className}.java`;

    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Wrote ${filename} to disk.`);
      }
    });
  }
).argv;

```

This code uses yargs to define a command called write-method that takes two positional arguments: classname and methodname. The classname argument specifies the name of the Java class to write, and the methodname argument specifies the name of the new method.

The second argument to the command method is a description of the command, and the third argument is a configuration object. In this case, we are using the positional method to define the classname and methodname positional arguments, and then using a callback function to generate the Java class content with the new method and write it to a file.

The packageName, className, and methodName variables are used to construct the package, class, and method names for the Java class. The content variable contains the code for the Java class, including the new method.

The filename variable is used to specify the name of the file to write the Java class to. The fs.writeFile method is then used to write the content to the specified file. If there is an error, the error is logged to the console, and if the write is successful, a success message is logged to the console.


## write a command to include a new method in an existent class

To include a new method in an existing Java class, you'll need to modify the existing class file by appending the new method to the end of the class definition. Here's an example of how to modify an existing Java class using yargs:

```
import * as fs from 'fs';
import yargs from 'yargs';

const argv = yargs.command(
  'add-method <classname> <methodname>',
  'Add a new method to an existing Java class',
  (yargs) => {
    yargs.positional('classname', {
      describe: 'The name of the Java class to modify',
      type: 'string',
    }).positional('methodname', {
      describe: 'The name of the new method',
      type: 'string',
    });
  },
  (argv) => {
    const packageName = 'br.com.teste';
    const className = argv.classname;
    const methodName = argv.methodname;

    const filename = `${className}.java`;

    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      // Check if the class already contains the method
      if (data.includes(`public void ${methodName}()`)) {
        console.log(`The ${className} class already contains a method named ${methodName}.`);
        return;
      }

      // Append the new method to the end of the class definition
      const newMethod = `  public void ${methodName}() {\n    // Add your code here\n  }\n`;
      const newClassDefinition = data.replace(/\}\s*$/, `${newMethod}}`);

      // Write the modified class definition to the file
      fs.writeFile(filename, newClassDefinition, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Added method ${methodName} to ${className}.`);
        }
      });
    });
  }
).argv;

```

This code uses yargs to define a command called add-method that takes two positional arguments: classname and methodname. The classname argument specifies the name of the Java class to modify, and the methodname argument specifies the name of the new method.

The second argument to the command method is a description of the command, and the third argument is a configuration object. In this case, we are using the positional method to define the classname and methodname positional arguments, and then using a callback function to read the existing Java class file, check if the class already contains the new method, append the new method to the end of the class definition if it doesn't already exist, and write the modified class definition back to the file.

The packageName, className, and methodName variables are used to construct the package, class, and method names for the Java class. The filename variable is used to specify the name of the file to read and write the Java class from and to.

The fs.readFile method is used to read the existing Java class file. If there is an error, the error is logged to the console, and if the read is successful, the existing class definition is passed to a callback function. The callback function checks if the class definition already contains the new method by searching for its signature. If the method is already defined, a message is logged to the console and the process terminates. If the method is not defined, the new method is constructed as a string and appended to the end of the class definition using a regular expression to match the closing curly brace of the class definition. Finally, the modified class definition is written back to the file using