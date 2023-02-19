# Using jcodemodel

https://sookocheff.com/post/java/generating-java-with-jcodemodel/

```
package com.sookocheff.example;

import com.sun.codemodel.*;

import java.io.File;
import java.io.Serializable;

/**
 * Example JCodeModel application.
 */
public class Main {

    public static void main(String[] args) throws Exception {

        // Instantiate a new JCodeModel
        JCodeModel codeModel = new JCodeModel();

        // Create a new package
        JPackage jp = codeModel._package("com.sookocheff.codemodel");

        // Create a new class
        JDefinedClass jc = jp._class("GeneratedClass");

        // Implement Serializable
        jc._implements(Serializable.class);

        // Add Javadoc
        jc.javadoc().add("A JCodeModel example.");

        // Add default constructor
        jc.constructor(JMod.PUBLIC).javadoc().add("Creates a new " + jc.name() + ".");

        // Add constant serializable id
        jc.field(JMod.STATIC | JMod.FINAL, Long.class, "serialVersionUID", JExpr.lit(1L));

        // Add private variable
        JFieldVar quantity = jc.field(JMod.PRIVATE, Integer.class, "quantity");

        // Add get method
        JMethod getter = jc.method(JMod.PUBLIC, quantity.type(), "getQuantity");
        getter.body()._return(quantity);
        getter.javadoc().add("Returns the quantity.");
        getter.javadoc().addReturn().add(quantity.name());

        // Add set method
        JMethod setter = jc.method(JMod.PUBLIC, codeModel.VOID, "setQuantity");
        setter.param(quantity.type(), quantity.name());
        setter.body().assign(JExpr._this().ref(quantity.name()), JExpr.ref(quantity.name()));
        setter.javadoc().add("Set the quantity.");
        setter.javadoc().addParam(quantity.name()).add("the new quantity");

        // Generate the code
        codeModel.build(new File("src/main/java/"));
    }
}
```