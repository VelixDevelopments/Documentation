---
title: Imperat
slug: /Imperat
id: Introduction
sidebar_position: 1
---
import DocCardList from '@theme/DocCardList';

# Introduction
Imperat is a powerful command dispatching framework, it allows you to create 
commands and converts them into the form of multiple data-condensed objects like `Command`,  `CommandUsage` and `CommandParameter`
These objects are registered/injected into the class `Imperat` which handles all information about each command and then dispatches/executes the command requested.

# Initiazling your Imperat

**Frequently asked question:** ***What's a command dispatcher/Imperat ??*** <br/>
**Answer:** It's the Ultimate class handling all data needed when processing and registering
commands objects (`Command`).
You have to create **new instance** of the imperat.
on the **start** of your platform by calling `YourPlatformImperat#builder` (the method is static) to configure your imperat instance,
then finally end the chain with `build` method to return a new instance of `YourPlatformImperat` type.

:::tip[TIP]
Creation of an instance of your `PlatformImperat` depends mainly on which platform
you are using. For more details, Check out [Supported-Platforms](Supported-Platforms.md)
But despite having various types of imperat implementations for different platforms,
all of them are **configurable/customizable**
:::

# Customizing Imperat



If you wanted to register a [Context Resolver](Context%20Resolver.md) or a [Parameter Type](Parameter-Type.md) , or even 
set a [Suggestion Resolver](Suggestion%20Resolver.md) for tab-completion in commands, You would have to 
call some methods while configuring imperat.

*Quick-example:*
```java
BukkitImperat imperat = BukkitImperat.builder(plugin)
// do stuff here
.build();
```

For a complete detailed guide on this, please check out [Dispatcher API](Dispatcher%20API.md)

:::note
It must be done **BEFORE** registering any command.<br/>
:::

:::warning
If you ever wanted to create your own implementation of `Imperat` interface, 
you will not receive any support and your issue will be instantly ignored/discarded
:::

# Creation of Commands
There's mainly 2 ways of creating commands
- [Classic (Built-in `Command.create(commandName)`)](command-api/Classic%20Command%20API.md)
- [Annotations Command API](command-api/Annotations%20Command%20API.md) 

## Classic
The main original (OG) way of creating a command is by using our built-in `Command.create(commandName)` method for creation <br/>
It returns a built-in builder for the command
Here's a quick example :

```java
var command = Command.<YourPlatformSource>createCommand("example").usage(...).othermethods(...)
```
By using the builder from `Command#createCommand`, you should use the methods in it to build and establish your command. 

For more details about what type of `Source` you should use, please check out [Supported platforms](Supported-Platforms.md)
You may modify the `command` object however you would like by checking out [Classic Command API](command-api/Classic%20Command%20API.md) which explains every possible way to modify any command object you create.

*Quick example:*
```java
command.usage(
  CommandUsage.<YourPlatformSource>builder()
    .parameters(
		  CommandParameter.requiredInt("firstArg")  
	  )
    .execute((source, context) -> {  
		  Integer firstArg  = context.getArgument("firstArg");  
		  source.reply("Entered required number= " + firstArg);  
	  });  
);
```
## Annotated Commands
Creating commands with annotations is easy with 2 steps only:
1. Create a class that will represent your command class
2. Add unique annotations to it that allows the dispatcher to identify it as a command class

*Quick example (Same results as the one above, but with annotations):*
```java
@Command("example")  
public final class ExampleCommand {

  @Usage  
  public void defaultUsage(YourPlatformSource source) {  
   source.reply("This is just an example with no arguments entered");  
  }  

  @Usage  
  public void exampleOneArg(
	  YourPlatformSource source, 
	  @Named("firstArg") int firstArg
  ) { 
   source.reply("Entered required number= " + firstArg);  
  }
}
```
# Register your commands
Finally after constructing and modifying your `command` object, it's now easy 
to register it by calling the method `Imperat#registerCommand(command)` 
**Note:** the method is called from the `Imperat` instance that you should have created

*Here's a quick example below if you're using the `Command.create` built-in way:*
```java
myCommandDispatcher.registerCommand(command);
```

Another example below with [Annotations Command API](command-api/Annotations%20Command%20API.md) :
```java
myCommandDispatcher.registerCommand(new ExampleCommand())
```

# Tutorials
Check out all the Imperat tutorials here!

<DocCardList />