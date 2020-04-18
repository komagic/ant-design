(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{3209:function(t,e){t.exports={content:["section",["p","双栏穿梭选择框。"],["h2","何时使用"],["ul",["li",["p","需要在多个可选项中进行多选时。"]],["li",["p","比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。"]]],["p","穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。"],["p","选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。其中，左边一栏为 ",["code","source"],"，右边一栏为 ",["code","target"],"，API 的设计也反映了这两个概念。"]],meta:{category:"Components",subtitle:"穿梭框",type:"数据录入",cols:1,title:"Transfer",filename:"components/transfer/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#注意",title:"注意"},"注意"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Transfer"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","className"],["td","自定义类"],["td","string"],["td"],["td"]],["tr",["td","dataSource"],["td","数据源，其中的数据将会被渲染到左边一栏中，",["code","targetKeys"]," 中指定的除外。"],["td",["a",{title:null,href:"https://git.io/vMM64"},"TransferItem"],"[","]"],["td","[","]"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","filterOption"],["td","接收 ",["code","inputValue"]," ",["code","option"]," 两个参数，当 ",["code","option"]," 符合筛选条件时，应返回 ",["code","true"],"，反之则返回 ",["code","false"],"。"],["td","(inputValue, option): boolean"],["td"],["td"]],["tr",["td","footer"],["td","底部渲染函数"],["td","(props) => ReactNode"],["td"],["td"]],["tr",["td","listStyle"],["td","两个穿梭框的自定义样式"],["td","object","|","({direction: 'left'","|","'right'}) => object"],["td"],["td"]],["tr",["td","locale"],["td","各种语言"],["td","{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode; }"],["td",["code","{ itemUnit: '项', itemsUnit: '项', searchPlaceholder: '请输入搜索内容' }"]],["td"]],["tr",["td","operations"],["td","操作文案集合，顺序从上至下"],["td","string","[","]"],["td","[","'>', '<']"],["td"]],["tr",["td","render"],["td","每行数据渲染函数，该函数的入参为 ",["code","dataSource"]," 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 ",["code","label"]," 字段为 ReactElement，",["code","value"]," 字段为 title"],["td","(record) => ReactNode"],["td"],["td"]],["tr",["td","selectedKeys"],["td","设置哪些项应该被选中"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","showSearch"],["td","是否显示搜索框"],["td","boolean"],["td","false"],["td"]],["tr",["td","showSelectAll"],["td","是否展示全选勾选框"],["td","boolean"],["td","true"],["td"]],["tr",["td","style"],["td","容器的自定义样式"],["td","object"],["td"],["td"]],["tr",["td","targetKeys"],["td","显示在右侧框数据的 key 集合"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","titles"],["td","标题集合，顺序从左至右"],["td","ReactNode","[","]"],["td","[","'', '']"],["td"]],["tr",["td","selectAllLabels"],["td","自定义顶部多选框标题的集合"],["td","(ReactNode ","|"," (info: { selectedCount: number, totalCount: number }) => ReactNode)[]"],["td"],["td"]],["tr",["td","onChange"],["td","选项在两栏之间转移时的回调函数"],["td","(targetKeys, direction, moveKeys): void"],["td"],["td"]],["tr",["td","onScroll"],["td","选项列表滚动时的回调函数"],["td","(direction, event): void"],["td"],["td"]],["tr",["td","onSearch"],["td","搜索框内容时改变时的回调函数"],["td","(direction: 'left'","|","'right', value: string): void"],["td","-"],["td"]],["tr",["td","onSelectChange"],["td","选中项发生改变时的回调函数"],["td","(sourceSelectedKeys, targetSelectedKeys): void"],["td"],["td"]]]],["h3","Render Props"],["p","Transfer 支持接收 ",["code","children"]," 自定义渲染列表，并返回以下参数："],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","版本"]]],["tbody",["tr",["td","direction"],["td","渲染列表的方向"],["td",["code","left"]," ","|"," ",["code","right"]],["td"]],["tr",["td","disabled"],["td","是否禁用列表"],["td","boolean"],["td"]],["tr",["td","filteredItems"],["td","过滤后的数据"],["td","TransferItem[]"],["td"]],["tr",["td","onItemSelect"],["td","勾选条目"],["td","(key: string, selected: boolean)"],["td"]],["tr",["td","onItemSelectAll"],["td","勾选一组条目"],["td","(keys: string[], selected: boolean)"],["td"]],["tr",["td","selectedKeys"],["td","选中的条目"],["td","string[]"],["td"]]]],["h4","参考示例"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Transfer <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>listProps <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>YourComponent <span class="token punctuation">{</span><span class="token operator">...</span>listProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transfer</span><span class="token punctuation">></span></span>'},["code","<Transfer {...props}>{listProps => <YourComponent {...listProps} />}</Transfer>"]],["h2","注意"],["p","按照 React 的",["a",{title:null,href:"http://facebook.github.io/react/docs/lists-and-keys.html#keys"},"规范"],"，所有的组件数组必须绑定 key。在 Transfer 中，",["code","dataSource"],"里的数据值需要指定 ",["code","key"]," 值。对于 ",["code","dataSource"]," 默认将每列数据的 ",["code","key"]," 属性作为唯一的标识。"],["p","如果你的数据没有这个属性，务必使用 ",["code","rowKey"]," 来指定数据列的主键。"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// 比如你的数据主键是 uid</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span> <span class="token attr-name">rowKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> record<span class="token punctuation">.</span>uid<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","// 比如你的数据主键是 uid\nreturn <Transfer rowKey={record => record.uid} />;"]],["h2","FAQ"],["h3","怎样让 Transfer 穿梭框列表支持异步数据加载"],["p","为了保持页码同步，在勾选时可以不移除选项而以禁用代替：",["a",{title:null,href:"https://codesandbox.io/s/93xeb"},"https://codesandbox.io/s/93xeb"]]]}}}]);