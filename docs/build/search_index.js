var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": "DocTestSetup = quote\n    using Iterators\nend"
},

{
    "location": "index.html#Iterators-1",
    "page": "Introduction",
    "title": "Iterators",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "Install this package with Pkg.add(\"Iterators\")"
},

{
    "location": "index.html#Usage-1",
    "page": "Introduction",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Iterators.chain",
    "page": "Introduction",
    "title": "Iterators.chain",
    "category": "Function",
    "text": "chain(xs...)\n\nIterate through any number of iterators in sequence.\n\njulia> for i in chain(1:3, ['a', 'b', 'c'])\n           @show i\n       end\ni = 1\ni = 2\ni = 3\ni = 'a'\ni = 'b'\ni = 'c'\n\n\n\n"
},

{
    "location": "index.html#chain(xs...)-1",
    "page": "Introduction",
    "title": "chain(xs...)",
    "category": "section",
    "text": "Iterate through any number of iterators in sequence.chain"
},

{
    "location": "index.html#Iterators.distinct",
    "page": "Introduction",
    "title": "Iterators.distinct",
    "category": "Function",
    "text": "distinct(xs)\n\nIterate through values skipping over those already encountered.\n\njulia> for i in distinct([1,1,2,1,2,4,1,2,3,4])\n           @show i\n       end\ni = 1\ni = 2\ni = 4\ni = 3\n\n\n\n\n"
},

{
    "location": "index.html#distinct(xs)-1",
    "page": "Introduction",
    "title": "distinct(xs)",
    "category": "section",
    "text": "Iterate through values skipping over those already encountered.distinct"
},

{
    "location": "index.html#Iterators.groupby",
    "page": "Introduction",
    "title": "Iterators.groupby",
    "category": "Function",
    "text": "groupby(f, xs)\n\nGroup consecutive values that share the same result of applying f.\n\njulia> for i in groupby(x -> x[1], [\"face\", \"foo\", \"bar\", \"book\", \"baz\", \"zzz\"])\n           @show i\n       end\ni = String[\"face\",\"foo\"]\ni = String[\"bar\",\"book\",\"baz\"]\ni = String[\"zzz\"]\n\n\n\n\n"
},

{
    "location": "index.html#groupby(f,-xs)-1",
    "page": "Introduction",
    "title": "groupby(f, xs)",
    "category": "section",
    "text": "Group consecutive values that share the same result of applying f.groupby"
},

{
    "location": "index.html#Iterators.imap",
    "page": "Introduction",
    "title": "Iterators.imap",
    "category": "Function",
    "text": "imap(f, xs1, [xs2, ...])\n\nIterate over values of a function applied to successive values from one or more iterators.\n\njulia> for i in imap(+, [1,2,3], [4,5,6])\n            @show i\n       end\ni = 5\ni = 7\ni = 9\n\n\n\n\n"
},

{
    "location": "index.html#imap(f,-xs1,-[xs2,-...])-1",
    "page": "Introduction",
    "title": "imap(f, xs1, [xs2, ...])",
    "category": "section",
    "text": "Iterate over values of a function applied to successive values from one or more iterators.imap"
},

{
    "location": "index.html#Iterators.iterate",
    "page": "Introduction",
    "title": "Iterators.iterate",
    "category": "Function",
    "text": "iterate(f, x)\n\nIterate over successive applications of f, as in f(x), f(f(x)), f(f(f(x))), ....\n\nUse Base.take() to obtain the required number of elements.\n\njulia> for i in take(iterate(x -> 2x, 1), 5)\n           @show i\n       end\ni = 1\ni = 2\ni = 4\ni = 8\ni = 16\n\njulia> for i in take(iterate(sqrt, 100), 6)\n           @show i\n       end\ni = 100\ni = 10.0\ni = 3.1622776601683795\ni = 1.7782794100389228\ni = 1.333521432163324\ni = 1.1547819846894583\n\n\n\n\n"
},

{
    "location": "index.html#iterate(f,-x)-1",
    "page": "Introduction",
    "title": "iterate(f, x)",
    "category": "section",
    "text": "Iterate over successive applications of f, as in f(x), f(f(x)), f(f(f(x))), ....iterate"
},

{
    "location": "index.html#Iterators.ncycle",
    "page": "Introduction",
    "title": "Iterators.ncycle",
    "category": "Function",
    "text": "ncycle(xs, n)\n\nCycle through iter n times.\n\njulia> for i in ncycle(1:3, 2)\n           @show i\n       end\ni = 1\ni = 2\ni = 3\ni = 1\ni = 2\ni = 3\n\n\n\n\n"
},

{
    "location": "index.html#ncycle(xs,-n)-1",
    "page": "Introduction",
    "title": "ncycle(xs, n)",
    "category": "section",
    "text": "Cycles through an iterator n times.ncycle"
},

{
    "location": "index.html#Iterators.nth",
    "page": "Introduction",
    "title": "Iterators.nth",
    "category": "Function",
    "text": "nth(xs, n)\n\nReturn the nth element of xs. This is mostly useful for non-indexable collections.\n\njulia> mersenne = Set([3, 7, 31, 127])\nSet([7,31,3,127])\n\njulia> nth(mersenne, 3)\n3\n\n\n\n\n"
},

{
    "location": "index.html#nth(xs,-n)-1",
    "page": "Introduction",
    "title": "nth(xs, n)",
    "category": "section",
    "text": "Return the nth element of xs.nth"
},

{
    "location": "index.html#Iterators.partition",
    "page": "Introduction",
    "title": "Iterators.partition",
    "category": "Function",
    "text": "partition(xs, n, [step])\n\nGroup values into n-tuples.\n\njulia> for i in partition(1:9, 3)\n           @show i\n       end\ni = (1,2,3)\ni = (4,5,6)\ni = (7,8,9)\n\n\nIf the step parameter is set, each tuple is separated by step values.\n\njulia> for i in partition(1:9, 3, 2)\n           @show i\n       end\ni = (1,2,3)\ni = (3,4,5)\ni = (5,6,7)\ni = (7,8,9)\n\njulia> for i in partition(1:9, 3, 3)\n           @show i\n       end\ni = (1,2,3)\ni = (4,5,6)\ni = (7,8,9)\n\njulia> for i in partition(1:9, 2, 3)\n           @show i\n       end\ni = (1,2)\ni = (4,5)\ni = (7,8)\n\n\n\n\n"
},

{
    "location": "index.html#partition(xs,-n,-[step])-1",
    "page": "Introduction",
    "title": "partition(xs, n, [step])",
    "category": "section",
    "text": "Group values into n-tuples.partition"
},

{
    "location": "index.html#Iterators.peekiter",
    "page": "Introduction",
    "title": "Iterators.peekiter",
    "category": "Function",
    "text": "peekiter(xs)\n\nLets you peek at the head element of an iterator without updating the state.\n\njulia> it = peekiter([\"face\", \"foo\", \"bar\", \"book\", \"baz\", \"zzz\"])\nIterators.PeekIter{Array{String,1}}(String[\"face\",\"foo\",\"bar\",\"book\",\"baz\",\"zzz\"])\n\njulia> s = start(it)\n(2,Nullable{String}(\"face\"))\n\njulia> @show peek(it, s)\npeek(it,s) = Nullable{String}(\"face\")\nNullable{String}(\"face\")\n\njulia> @show peek(it, s)\npeek(it,s) = Nullable{String}(\"face\")\nNullable{String}(\"face\")\n\njulia> x, s = next(it, s)\n(\"face\",(3,Nullable{String}(\"foo\"),false))\n\njulia> @show x\nx = \"face\"\n\"face\"\n\njulia> @show peek(it, s)\npeek(it,s) = Nullable{String}(\"foo\")\nNullable{String}(\"foo\")\n\n\n\n\n"
},

{
    "location": "index.html#peekiter(xs)-1",
    "page": "Introduction",
    "title": "peekiter(xs)",
    "category": "section",
    "text": "Peek at the head element of an iterator without updating the state.peekiter"
},

{
    "location": "index.html#Iterators.product",
    "page": "Introduction",
    "title": "Iterators.product",
    "category": "Function",
    "text": "product(xs...)\n\nIterate over all combinations in the Cartesian product of the inputs.\n\njulia> for p in product(1:3,4:5)\n           @show p\n       end\np = (1,4)\np = (2,4)\np = (3,4)\np = (1,5)\np = (2,5)\np = (3,5)\n\n\n\n\n"
},

{
    "location": "index.html#product(xs...)-1",
    "page": "Introduction",
    "title": "product(xs...)",
    "category": "section",
    "text": "Iterate over all combinations in the Cartesian product of the inputs.product"
},

{
    "location": "index.html#Iterators.repeatedly",
    "page": "Introduction",
    "title": "Iterators.repeatedly",
    "category": "Function",
    "text": "repeatedly(f, n)\n\nCall function f n times, or infinitely if n is omitted.\n\njulia> t() = (sleep(0.1); Dates.millisecond(now()))\nt (generic function with 1 method)\n\njulia> collect(repeatedly(t, 5))\n5-element Array{Any,1}:\n 993\n  97\n 200\n 303\n 408\n\n\n\n"
},

{
    "location": "index.html#repeatedly(f,-[n])-1",
    "page": "Introduction",
    "title": "repeatedly(f, [n])",
    "category": "section",
    "text": "Call a function n times, or infinitely if n is omitted.repeatedly"
},

{
    "location": "index.html#Iterators.takenth",
    "page": "Introduction",
    "title": "Iterators.takenth",
    "category": "Function",
    "text": "takenth(xs, n)\n\nIterate through every nth element of xs.\n\njulia> collect(takenth(5:15,3))\n3-element Array{Int64,1}:\n  7\n 10\n 13\n\n\n\n\n"
},

{
    "location": "index.html#takenth(xs,-n)-1",
    "page": "Introduction",
    "title": "takenth(xs, n)",
    "category": "section",
    "text": "Iterate through every n'th element of xstakenth"
},

{
    "location": "index.html#Iterators.subsets",
    "page": "Introduction",
    "title": "Iterators.subsets",
    "category": "Function",
    "text": "subsets(xs)\nsubsets(xs, k)\n\nIterate over every subset of the collection xs. You can restrict the subsets to a specific size k.\n\njulia> for i in subsets([1, 2, 3])\n          @show i\n       end\ni = Int64[]\ni = [1]\ni = [2]\ni = [1,2]\ni = [3]\ni = [1,3]\ni = [2,3]\ni = [1,2,3]\n\njulia> for i in subsets(1:4, 2)\n          @show i\n       end\ni = [1,2]\ni = [1,3]\ni = [1,4]\ni = [2,3]\ni = [2,4]\ni = [3,4]\n \n\n\n\n"
},

{
    "location": "index.html#subsets(xs,-[k])-1",
    "page": "Introduction",
    "title": "subsets(xs, [k])",
    "category": "section",
    "text": "Iterate over every subset of a collection xs, or iterate over every subset of size k from a collection xs.subsets"
},

{
    "location": "index.html#Iterators.takestrict",
    "page": "Introduction",
    "title": "Iterators.takestrict",
    "category": "Function",
    "text": "takestrict(xs, n::Int)\n\nLike take(), an iterator that generates at most the first n elements of xs, but throws an exception if fewer than n items are encountered in xs.\n\njulia> a = :1:2:11\n1:2:11\n\njulia> collect(takestrict(a, 3))\n3-element Array{Int64,1}:\n 1\n 3\n 5\n\n\n\n"
},

{
    "location": "index.html#takestrict(xs,-n)-1",
    "page": "Introduction",
    "title": "takestrict(xs, n)",
    "category": "section",
    "text": "Equivalent to take, but will throw an exception if fewer than n items are encountered in xs.takestrict"
},

{
    "location": "index.html#Iterators.@itr",
    "page": "Introduction",
    "title": "Iterators.@itr",
    "category": "Macro",
    "text": "@itr(ex)\n\nThe @itr macro automaticaly inlines some iterators in for loops, to produce faster code.\n\nThe macro can be used with the following supported iterators: zip(), enumerate(), take(), takestrict(), drop(), and chain().\n\njulia> for (x,y) in zip(1:3, 4:6)\n           @show x,y\n       end\n(x,y) = (1,4)\n(x,y) = (2,5)\n(x,y) = (3,6)\n\njulia> @itr for (x,y) in zip(1:3, 4:6)\n           @show x,y\n       end\n(x,y) = (1,4)\n(x,y) = (2,5)\n(x,y) = (3,6)\n\n\n\n\n"
},

{
    "location": "index.html#The-@itr-macro-for-automatic-inlining-in-for-loops-1",
    "page": "Introduction",
    "title": "The @itr macro for automatic inlining in for loops",
    "category": "section",
    "text": "Using functional iterators is powerful and concise, but may incur in some overhead, and manually inlining the operations can typically improve performance in critical parts of the code. The @itr macro is provided to do that automatically in some cases. Its usage is trivial: for example, given this code:for (x,y) in zip(a,b)\n    @show x,y\nendthe automatically inlined version can be obtained by simply doing:@itr for (x,y) in zip(a,b)\n    @show x,y\nendThis typically results in faster code, but its applicability has limitations:it only works with for loops;\nif multiple nested iterators are used, only the outermost is affected by the transformation;\nexplicit expressions are required (i.e. when a Tuple is expected, an explicit tuple must be provided, a tuple variable won't be accepted);\nsplicing is not supported;\nmultidimensional loops (i.e. expressions such as for x in a, y in b) are not supportedThe @itr macro can be used with the following supported iterators:zip\nenumerate\ntake\ntakestrict\ndrop\nchain@itr"
},

{
    "location": "functionindex.html#",
    "page": "Function index",
    "title": "Function index",
    "category": "page",
    "text": ""
},

{
    "location": "functionindex.html#Index-1",
    "page": "Function index",
    "title": "Index",
    "category": "section",
    "text": ""
},

]}
