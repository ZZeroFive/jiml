(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{433:function(_,v,t){_.exports=t.p+"assets/img/threadpool.f64f4252.png"},434:function(_,v,t){_.exports=t.p+"assets/img/poolwork.65790da4.png"},454:function(_,v,t){"use strict";t.r(v);var r=t(2),e=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本概念"}},[_._v("#")]),_._v(" 1. 基本概念")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("什么是线程池？为什么要用线程池？")]),_._v(" "),v("p",[_._v("​        线程是操作系统调度的基本单元，是操作系统中重要的资源。线程的创建和销毁会消耗一定的性能，频繁大量地创建销毁线程会降低系统的可用性。")]),_._v(" "),v("p",[_._v("​        为了更好的利用线程，就提出了一种线程池技术。线程池会预先创建一定数量的线程，当存在需要执行的任务时，直接提交给线程池，线程池选择空闲的线程，并指派该线程运行任务，任务运行结束后，将线程重新回到空闲状态。以此，减少了线程地频繁创建和销毁。所以对于线程池而言对外应该提供的功能有")])])]),_._v(" "),v("p",[_._v("​\t（1）向线程池中提交任务")]),_._v(" "),v("p",[_._v("​\t（2）线程池执行任务，并可以返回任务结果")]),_._v(" "),v("p",[_._v("​\t（3）线程池中运行的、待运行的任务可以被中断")]),_._v(" "),v("p",[_._v("​\t此外，线程池本身在实现时，需要考虑的问题：")]),_._v(" "),v("p",[_._v("​\t（1）线程池所维护的空闲线程最大个数")]),_._v(" "),v("p",[_._v("​\t（2）线程池任务超出空闲线程个数时，如何存储任务")]),_._v(" "),v("p",[_._v("​\t（3）一般对于（2）一般会采用阻塞队列的形式存储任务。队列分为有界和无界，对于有界队列，缓存的任务超出队列大小之后，又该怎么处理任务，这就涉及到线程池的拒绝策略问题。")]),_._v(" "),v("h2",{attrs:{id:"_2-工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-工作流程"}},[_._v("#")]),_._v(" 2. 工作流程")]),_._v(" "),v("h3",{attrs:{id:"_2-1-线程池大小"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-线程池大小"}},[_._v("#")]),_._v(" 2.1 线程池大小")]),_._v(" "),v("ul",[v("li",[_._v("核心线程数（corePoolSize）：用来表示线程池中的核心线程的数量，也可以称为可闲置的线程数量")]),_._v(" "),v("li",[_._v("最大线程数（maximumPoolSize）：用来表示线程池中最多能够创建的线程数量。")])]),_._v(" "),v("p",[_._v("既然已经有了标识工作线程的个数的变量了，为什么还要有"),v("strong",[_._v("核心线程数")]),_._v("和"),v("strong",[_._v("最大线程数")]),_._v("呢？")]),_._v(" "),v("p",[_._v("创建线程是有代价的，"),v("strong",[_._v("不能每次要执行一个任务时就创建一个线程，但是也不能在任务非常多的时候，只有少量的线程在执行，这样任务是来不及处理的，而是应该创建合适的足够多的线程来及时地处理任务")]),_._v("。随着任务数量的变化，当任务数量明显减少时，原本创建的多余的线程就没有必要再存活着了，因为这时使用少量的线程就能够处理得过来了，所以说真正工作的线程的数量，是随着任务的变化而变化的。")]),_._v(" "),v("p",[_._v("工作线程的个数可能从0到最大线程数之间变化，当执行一段时间之后可能维持在核心线程数（corePoolSize），但也不是绝对的，取决于"),v("strong",[_._v("核心线程是否允许被超时回收")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"_2-2-线程的创建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-线程的创建"}},[_._v("#")]),_._v(" 2.2 线程的创建")]),_._v(" "),v("p",[_._v("既然是线程池，那自然少不了线程。线程该如何来创建呢？这个任务就交给了线程工厂ThreadFactory来完成。")]),_._v(" "),v("h3",{attrs:{id:"_2-3-阻塞队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-阻塞队列"}},[_._v("#")]),_._v(" 2.3 阻塞队列")]),_._v(" "),v("p",[_._v("上面说了核心线程数和最大线程数，并且也介绍了"),v("strong",[_._v("工作线程的个数是在0和最大线程数之间变化的")]),_._v("。但是不可能一下子就创建了所有线程，把线程池装满，而是有一个过程：当线程池接受到一个任务时，如果工作线程数没有达到corePoolSize，那么就会新建一个线程，并绑定该任务，直到工作线程的数量达到corePoolSize前都不会重用之前创建的线程。")]),_._v(" "),v("p",[_._v("当工作线程数达到corePoolSize了，这是又接收到新任务时，"),v("strong",[_._v("会将任务存放在一个阻塞队列（workQueue）中等待核心线程去执行")]),_._v("。")]),_._v(" "),v("p",[_._v("为什么不直接创建更多的线程来执行新任务呢？")]),_._v(" "),v("p",[_._v("原因是核心线程中很可能已经有线程执行完自己的任务了，或者有其他线程马上就能处理完当前的任务，并且接下来就能投入到新的任务中去，所以阻塞队列是一种缓冲机制，给核心线程一个机会让他们充分发挥自己的能力。另外一个值得考虑的原因是，创建线程毕竟是代价昂贵的，不可能一有任务要执行就去创建一个新的线程。")]),_._v(" "),v("h3",{attrs:{id:"_2-4-非核心线程存活时间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-非核心线程存活时间"}},[_._v("#")]),_._v(" 2.4 非核心线程存活时间")]),_._v(" "),v("p",[_._v("上面说了，当工作线程数达到corePoolSize时，线程池会将新接收到的任务放在阻塞队列中，而阻塞队列又分为两种情况："),v("strong",[_._v("一种是有界的队列，一种是无界的队列。")])]),_._v(" "),v("p",[_._v("如果是无界队列，那么当核心线程都在忙时，所有新提交的任务都会被存放在该无界队列中，这时最大线程数将变得没有意义，因为阻塞队列不会存在被装满的情况。"),v("strong",[_._v("如果是有界队列，那么当阻塞队列中装满了等待执行的任务，这时再有新任务提交时，线程池就需要创建新的临时线程来处理，相当于增派人手来处理任务。")])]),_._v(" "),v("p",[_._v("但是创建的临时线程是有存活时间的，不可能让它们一直都存活着，"),v("font",{attrs:{color:"red"}},[v("strong",[_._v("当阻塞队列中的任务被执行完毕，并且又没有那么多新任务被提交时，临时线程就需要被回收销毁，而在被回收销毁之前等待的这段时间，就是非核心线程的存活时间，也就是keepAliveTime属性")]),_._v("。")])],1),_._v(" "),v("p",[_._v("那么什么是非核心线程呢？是不是先创建的线程就是核心线程，后创建的就是非核心线程呢？")]),_._v(" "),v("p",[_._v("其实核心线程跟创建的先后没有关系，而是跟工作线程的个数有关，"),v("strong",[_._v("如果当前工作线程的个数大于核心线程数，那么所有的线程都可能是非核心线程，都有被回收的可能。")])]),_._v(" "),v("p",[_._v("一个线程执行完一个任务后，会去阻塞队列里面取新的任务，在取到任务之前，它就是一个闲置的线程。")]),_._v(" "),v("p",[_._v("取任务的方法有两种，一种是通过take()方法一直阻塞直到取出任务，另一种是通过poll(keepAliveTime, timeUnit)方法在一定时间内取出任务或者超时，如果超时这个线程就会被回收，请注意核心线程一般不会被回收。")]),_._v(" "),v("p",[_._v("那么怎么保证核心线程不会被回收呢？还是跟工作线程的个数有关，每一个线程在取任务的时候，线程池会比较当前的工作线程个数与核心线程数。")]),_._v(" "),v("p",[_._v("1.如果"),v("strong",[_._v("工作线程数<核心线程数")]),_._v("，则使用第一种方法取任务，也就是没有超时回收，这时所有的工作线程都是核心线程，它们不会被回收。")]),_._v(" "),v("p",[_._v("2.如果"),v("strong",[_._v("工作线程数>核心线程数")]),_._v("，则使用第二种方法取任务，一旦超时就回收，所以"),v("font",{attrs:{color:"red"}},[_._v("并没有绝对的核心线程，只要这个线程没有在存活时间内取到任务去执行就会被回收。")])],1),_._v(" "),v("p",[v("strong",[_._v("所以每个线程如果想要保住自己核心线程的身份，必须充分努力，尽可能快得获取到任务去执行，这样才能避免被回收的命运。")])]),_._v(" "),v("p",[_._v("核心线程一般不会被回收，但是也不是绝对的，如果我们设置了允许核心线程超时被回收的话，那么就没有核心线程这种说法了.例如线程如果都通过poll(keepAliveTime, timeUnit)来获取任务，一旦超时获取不到任务，就会被回收.一般很少会这样来使用，除非该线程池需要处理的任务非常少，并且频率也不高，"),v("strong",[_._v("不需要将核心线程一直维持着")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"_2-5-拒绝策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-拒绝策略"}},[_._v("#")]),_._v(" 2.5 拒绝策略")]),_._v(" "),v("p",[_._v("虽然我们有了阻塞队列来对任务进行缓存，从一定程度上为线程池的执行提供了缓冲期，但是如果是有界的阻塞队列，那就存在队列满的情况，也存在工作线程的数据已经达到最大线程数的时候。如果这时候再有新的任务提交时，显然线程池已经心有余而力不足了，因为既没有空余的队列空间来存放该任务，也无法创建新的线程来执行该任务了，所以这时我们就需要有一种拒绝策略，即handler。")]),_._v(" "),v("p",[_._v("拒绝策略是一个RejectedExecutionHandler类型的变量，用户可以自行指定拒绝的策略，如果不指定的话，线程池将使用默认的拒绝策略：抛出异常。")]),_._v(" "),v("p",[_._v("在线程池中还为我们提供了很多其他可以选择的拒绝策略：")]),_._v(" "),v("p",[_._v("1.直接丢弃该任务")]),_._v(" "),v("p",[_._v("2.使用调用者线程执行该任务: 哪个线程提交的任务用这个线程运行任务？")]),_._v(" "),v("p",[_._v("3.丢弃任务队列中的最老的一个任务，然后提交该任务")]),_._v(" "),v("h2",{attrs:{id:"_3-工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-工作流程"}},[_._v("#")]),_._v(" 3.工作流程")]),_._v(" "),v("p",[v("img",{attrs:{src:t(433),alt:"img"}}),_._v("\n线程池的原理可以细分成：")]),_._v(" "),v("ul",[v("li",[_._v("提交任务")]),_._v(" "),v("li",[_._v("创建工作线程")]),_._v(" "),v("li",[_._v("启动工作线程")]),_._v(" "),v("li",[_._v("获取任务并执行")])]),_._v(" "),v("h3",{attrs:{id:"_3-1-提交任务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-提交任务"}},[_._v("#")]),_._v(" 3.1 提交任务")]),_._v(" "),v("p",[_._v("当向线程池提交一个新的任务时，线程池有三种处理情况，分别是：创建一个工作线程来执行该任务、将任务加入阻塞队列、拒绝该任务。")]),_._v(" "),v("p",[_._v("提交任务的过程也可以拆分成以下几个部分：")]),_._v(" "),v("p",[_._v("1.当"),v("code",[_._v("工作线程数<核心线程数")]),_._v("时，直接创建新的核心工作线程。")]),_._v(" "),v("p",[_._v("2.当"),v("code",[_._v("工作线程数>核心线程数")]),_._v("时，就需要尝试将任务添加到阻塞队列中去。")]),_._v(" "),v("p",[_._v("3.如果能够加入成功，说明队列还没满，那么就需要做以下的二次校验来保证添加进去的任务能够成功被执行。")]),_._v(" "),v("p",[_._v("4.验证当前线程池中的运行状态，如果是非RUNNING状态，则需要将任务从阻塞队列中移除，然后拒绝该任务。")]),_._v(" "),v("p",[_._v("5.验证当前线程池中的工作线程的个数，如果是0，则需要主动添加一个空工作线程来执行刚刚添加到阻塞队列中的任务。")]),_._v(" "),v("p",[_._v("6.如果加入失败，说明队列已经满了，这时就需要创建新的临时工作线程来执行任务。")]),_._v(" "),v("p",[_._v("7.如果创建成功，则直接执行该任务。")]),_._v(" "),v("p",[_._v("8.如果创建失败，说明工作线程数已经等于最大线程数了，只能执行拒绝策略了。")]),_._v(" "),v("p",[_._v("整个过程可以用下面这张图来表示：\n"),v("img",{attrs:{src:t(434),alt:"img"}})]),_._v(" "),v("h3",{attrs:{id:"_3-2-创建工作线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-创建工作线程"}},[_._v("#")]),_._v(" 3.2 创建工作线程")]),_._v(" "),v("p",[_._v("创建工作线程需要做一系列的判断，需要确保当前线程池可以创建新的线程之后，才能创建。")]),_._v(" "),v("p",[_._v("首先，当线程池的状态是SHUTDOWN或者STOP时，不能创建新的线程。")]),_._v(" "),v("p",[_._v("其次，当线程工厂创建线程失败时，也不能创建新的线程。")]),_._v(" "),v("p",[_._v("第三，拿当前工作线程的数量与核心线程数、最大线程数进行比较，如果前者大于后者的话，也不允许创建。")]),_._v(" "),v("p",[_._v("除此之外，线程池会尝试通过CAS来自增工作线程的个数，如果自增成功了，则会创建新的工作线程，即Worker对象。")]),_._v(" "),v("p",[_._v("然后加锁进行二次验证是否能够创建工作线程，如果最后创建成功，则会启动该工作线程。")]),_._v(" "),v("h3",{attrs:{id:"_3-3-启动工作线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-启动工作线程"}},[_._v("#")]),_._v(" 3.3 启动工作线程")]),_._v(" "),v("p",[_._v("当工作线程创建成功后，也就是Worker对象已经创建好了，这时就需要启动该工作线程，让线程开始干活了，Worker对象中关联着一个Thread，所以要启动工作线程的话，只要通过worker.thread.start()来启动该线程即可。")]),_._v(" "),v("p",[_._v("启动完了之后，就会执行Worker对象的run方法，因为Worker实现了Runnable接口，所以本质上Worker也是一个线程。")]),_._v(" "),v("p",[_._v("通过线程start开启之后就会调用到Runnable的run方法，在Worker对象的run方法中，调用了runWorker(this)方法，也就是把当前对象传递给了runWorker()方法，让它来执行。")]),_._v(" "),v("h3",{attrs:{id:"_3-4-获取任务并执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-获取任务并执行"}},[_._v("#")]),_._v(" 3.4 获取任务并执行")]),_._v(" "),v("p",[_._v("在runWorker方法被调用之后，就是执行具体的任务了，首先需要拿到一个可以执行的任务，而Worker对象中默认绑定了一个任务，如果该任务不为空的话，那么就是直接执行。")]),_._v(" "),v("p",[_._v("执行完了之后，就会去阻塞队列中获取任务来执行。")]),_._v(" "),v("p",[_._v("获取任务的过程则需要考虑当前工作线程的个数：")]),_._v(" "),v("p",[_._v("1.如果工作线程数大于核心线程数，那么就需要通过poll(keepAliveTime, timeUnit)来获取，因为这时需要对闲置线程进行超时回收。")]),_._v(" "),v("p",[_._v("2.如果工作线程数小于等于核心线程数，那么就可以通过take()来获取了。因为这时所有的线程都是核心线程，不需要进行回收，前提是没有设置allowCoreThreadTimeOut（允许核心线程超时回收）为true。")])])}),[],!1,null,null,null);v.default=e.exports}}]);