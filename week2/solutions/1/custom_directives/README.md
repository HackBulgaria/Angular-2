# Task 1

Create a custom directive ifElse

```
<div [ifElse]="cond">
    <template #true>Its True</template>
    <template #false>Its False</template>
</div> 
``` 
# Task 2 

Create a curstom directive forEach

```
<div *myFor="[1,2,3]; let theItem = item;">
    This is cool {{theItem}}
</div>
```

# Task 3

Create a module with both directives that can be used just like the FormsModule.
When the module is imported all the directives inside can be used in our application

# Task 4 

Modify Task1 to use * instead of templates

```
<div [ifElseStar]="cond">
    <div *ifTrueCase>The truth!</div>
    <div *ifFlaseCase>The lie!</div>
</div>
```