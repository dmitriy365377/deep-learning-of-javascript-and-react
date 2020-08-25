// const items = {
//     'выкройки online': {
//         autochild_fieldprototype_id: null,
//         filter_set: 3340,
//         filters: ["new", "sale"],
//         group_count: 2366,
//         id: 1951,
//         is_visible: true,
//         item_prefix: "ВКК",
//         items: {
//             'бесплатные выкройки': {
//                 autochild_fieldprototype_id: null,
//                 filter_set: 9650,
//                 group_count: 10,
//                 id: 8348,
//                 is_visible: false,
//                 item_prefix: null,
//                 items: {},
//                 items_count: 122,
//                 level: 3,
//                 query: `раздел="выкройки" и тип="выкройки" и подтип="бесплатные выкройки"`,
//                 section: 2774,
//                 stats: 1.82,
//                 tags_list: [],
//                 url: "/vykroiki/besplatnye_vykroiki/",
//             },
//             'детская одежда': {
//                 autochild_fieldprototype_id: null,
//                 filter_set: 5763,
//                 group_count: 208,
//                 id: 4418,
//                 is_visible: true,
//                 item_prefix: "ВКК",
//                 items: {
//                     'мальчики': {
//                         autochild_fieldprototype_id: null,
//                         filter_set: 5767,
//                         group_count: 46,
//                         id: 4434,
//                         is_visible: true,
//                         item_prefix: "ВКК",
//                         items: {},
//                         items_count: 533,
//                         level: 4,
//                         query: `раздел="выкройки" и тип="выкройки" и подтип="мальчики"`,
//                         section: 2774,
//                         stats: 30.82,
//                         tags_list: [],
//                         url: "/vykroiki/detskaya_odezhda_dlya_malchikov/",
//                     },
//                     'девочки': {
//                         autochild_fieldprototype_id: null,
//                         filter_set: 5768,
//                         group_count: 166,
//                         id: 4435,
//                         is_visible: true,
//                         item_prefix: "ВКК",
//                         items: {},
//                         items_count: 2067,
//                         level: 4,
//                         query: `раздел="выкройки" и тип="выкройки" и подтип="девочки"`,
//                         section: 2774,
//                         stats: 69.18,
//                         tags_list: [],
//                         url: "/vykroiki/detskaya_odezhda_dlya_devochek/",
//                     },
//                 },
//                 items_count: 2568,
//                 level: 3,
//                 query: `раздел="выкройки" и тип="выкройки" и (подтип="мальчики" или подтип="девочки")`,
//                 section: 2774,
//                 stats: 0.52,
//                 tags_list: [],
//                 url: "/vykroiki/detskaya_odezhda/",
//             },
//         },
//         items_count: 29285,
//         level: 1,
//         query: `раздел="выкройки" и тип="выкройки"`,
//         section: 2774,
//         stats: 0.83,
//         tags_list: ["create-all-link"],
//         url: "/vykroiki/",
//     },
// }

// function isObj(obj) {
//     return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
// }

// function deepCopy(obj, predicate) {
//     const objCopy = {}
//     for (let key in obj) {
//         if (!isObj(obj[key])) {
//             objCopy[key] = obj[key];
//             continue;
//         }
//         if (key === 'items' || predicate(obj[key])) {
//             objCopy[key] = deepCopy(obj[key], predicate);
//         }
//     }
//     return objCopy
// }

// console.log(deepCopy(items, x => x.is_visible))


// import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
// import classNames from 'classnames';
// import { FormControl, Glyphicon } from 'react-bootstrap';
// import isEmpty from 'lodash/isEmpty';
// import cloneDeep from 'lodash/cloneDeep';

// import { getSearchValue, debounce, findMenuObject, findMenuObjectTree } from './../../utils';
// import RecursiveIterator from '../../utils/RecursiveIterator';

// import NewMenuItem from './NewMenuItem';

// export default class NewMenu extends Component {
//   constructor(...args) {
//     super(...args);
//     this.state = {
//       search: '',
//       changeField: false
//     };
//     this.searchChangeHandler = this.searchChangeHandler.bind(this);
//     this.getSearchResults = this.getSearchResults.bind(this);
//   }

//   componentWillReceiveProps(nextProps) {
//     const { categories } = nextProps;

//     if (categories.items !== this.props.categories.items) {
//       let resultLength = 0;
//       for (const { node } of new RecursiveIterator(nextProps.categories.items)) {
//         if (node && isEmpty(node.items)) {
//           resultLength += 1;
//         }
//       }
//       this.setState({
//         resultLength
//       });
//     }

//     if ((nextProps.categories &&
//         nextProps.categories.items) &&
//         (
//           (nextProps.filtersetId !== this.props.filtersetId)
//           || nextProps.menuId == null
//         )
//     ) {
//       const menuCurrentObject = findMenuObject(nextProps.categories.items, nextProps.filtersetId);
//       if (menuCurrentObject && menuCurrentObject.id === this.props.menuId) {
//         return;
//       }
//       if (menuCurrentObject) {
//         this.props.setMenuId(menuCurrentObject.id, menuCurrentObject.section);
//         const currentPath = findMenuObjectTree(nextProps.categories.items, nextProps.filtersetId);
//         this.setState({
//           currentPath
//         });
//       }
//     }
//   }

//   getSearchResults(_items) {
//     const items = cloneDeep(_items);
//     const result = [];
//     for (const { node, path } of new RecursiveIterator(items)) {
//       if ((getSearchValue(path[path.length - 1]).indexOf(this.state.search) > -1) && isEmpty(node.items)) {
//         result.push({ title: path[path.length - 1], item: node });
//       }
//     }
//     return result;
//   }

//   searchChangeHandler(event) {
//     const tmpSearch = event.target.value;
//     this.setState({
//       tmpSearch
//     });
//     this.timer = debounce(this.timer, () => {
//       this.setState({
//         search: tmpSearch
//       });
//     }, 350);
//   }

//   filterHandler = () => {
//     this.setState(state => ({
//       changeButton: !state.changeButton
//     }))
//   }

//     filterHandler = () => {
//         this.setState((prev) => ({
//             changeField: !prev.changeField,
//       }))
//     }

//     function isObj(obj) {
//         return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
//     }

//     function deepCopy(obj, predicate) {
//         const objCopy = {}
//         for (let key in obj) {
//             if (!isObj(obj[key])) {
//                 objCopy[key] = obj[key];
//                 continue;
//             }
//             if (key === 'items' || predicate(obj[key])) {
//                 objCopy[key] = deepCopy(obj[key], predicate);
//             }
//         }
//         return objCopy
//     }

//       deepCopy(items, x => x.is_visible)

//   render() {
//     const {
//       collapsed,
//       squeeze,
//       fullscreen,
//       categories,
//       batchEditItemGroups,
//       batchEditItems,
//       handleCreateNewMenu,
//     } = this.props;
//     const { isFetching, items } = categories;
//     const search = getSearchValue(this.state.search);
//     const containerClasses = classNames({
//       'side-list-container': true,
//       'categories-list-container': true,
//       collapsed,
//       squeeze,
//       fullscreen
//     });

//     let empty = true;
//     if (items && Object.keys(items).length) {
//       empty = false;
//     }

//       if (this.state.changeField) {
          
//       } else {
//           items
//       }

//     return (
//       <aside className={containerClasses}>
//         {(batchEditItemGroups.length > 0 || batchEditItems.length > 0) &&
//           <div className="batch-edit-nav">
//             <h3>Групповое редактирование</h3>

//             {(batchEditItemGroups.length > 0) &&
//               <p>
//                 <Link to="/categories/batch_edit_item_groups/" className="batch-edit-link">
//                   Группы товаров ({batchEditItemGroups.length}){' '}
//                 </Link>

//                 <span className="empty-batch-edit-items" onClick={this.props.emptyBatchEditItemGroups}>
//                   <Glyphicon glyph="remove" />
//                 </span>
//               </p>
//             }

//             {(batchEditItems.length > 0) &&
//               <p>
//                 <Link to="/categories/batch_edit_items/" className="batch-edit-link">
//                   Товары ({batchEditItems.length}){' '}
//                 </Link>

//                 <span className="empty-batch-edit-items" onClick={this.props.emptyBatchEditItems}>
//                   <Glyphicon glyph="remove" />
//                 </span>
//               </p>
//             }
//           </div>
//         }
//         <button onChange={this.filterHandler}>ОТКЛЮЧЕНИЕ</button>
//         <h3>
//           Меню
//           {(!isFetching) &&
//             <FormControl
//               type="text"
//               value={this.state.tmpSearch}
//               placeholder="Найти"
//               onChange={this.searchChangeHandler}
//             />
//           }
//         </h3>

//         {(!isFetching && empty) &&
//           <p style={{ paddingLeft: 15 }}>
//             Нет категорий
//           </p>
//         }
//         {/* тут рисуется  */}
//         {items && !search &&
//           Object.keys(items)
//           .map(key => (
//             <div className="categories-list" key={`filterset_${key}`}>
//               <NewMenuItem
//                 handleCreateNewMenu={handleCreateNewMenu}
//                 title={key}
//                 item={items[key]}
//                 currentPath={this.state.currentPath}
//                 disableLink
//               />
//             </div>
//           ))
//         }
//         {items && search &&
//           this.getSearchResults(items)
//           .map(item => (
//             <div className="categories-list" key={`searchResults_${item.title}`}>
//               <NewMenuItem
//                 handleCreateNewMenu={handleCreateNewMenu}
//                 title={item.title}
//                 item={item.item}
//               />
//             </div>
//           ))
//         }
//         {isFetching && <div><span className="preloader" /></div>}
//       </aside>
//     );
//   }
// }

// NewMenu.propTypes = {
//   squeeze: PropTypes.bool,
//   fullscreen: PropTypes.bool,
//   collapsed: PropTypes.bool.isRequired,
//   batchEditItemGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   batchEditItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   categories: PropTypes.shape({
//     items: PropTypes.shape({}),
//   }).isRequired,
//   emptyBatchEditItemGroups: PropTypes.func.isRequired,
//   emptyBatchEditItems: PropTypes.func.isRequired,
//   setMenuId: PropTypes.func.isRequired,
//   handleCreateNewMenu: PropTypes.func.isRequired,
//   filtersetId: PropTypes.string,
//   menuId: PropTypes.number,
// };





























// // function objFilter(items) {
// //     return Object.fromEntries(Object.entries(items).reduce((acc, [name, obj]) => {
// //         if (obj.is_visible) {
// //             if (obj.items) {
// //                 obj.items = objFilter(obj.items)
// //             }
// //             acc.push([name, obj])
// //         }
// //         return acc
// //     }, []))
// // }

// // console.log(objFilter(items))
    
//     // 'детская одежда': {
//     // autochild_fieldprototype_id: null,
//     // filter_set: 5763,
//     // group_count: 208,
//     // id: 4418,
//     // is_visible: true,
//     // item_prefix: "ВКК",
//     // items: {
//     // 'мальчики': {
//     // autochild_fieldprototype_id: null,
//     // filter_set: 5767,
//     // group_count: 46,
//     // id: 4434,
//     // is_visible: true,
//     // item_prefix: "ВКК",
//     // items: {},
//     // items_count: 533,
//     // level: 4,
//     // query: `раздел="выкройки" и тип="выкройки" и подтип="мальчики"`,
//     // section: 2774,
//     // stats: 30.82,
//     // tags_list: [],
//     // url: "/vykroiki/detskaya_odezhda_dlya_malchikov/",
//     // },
//     // 'девочки': {
//     // autochild_fieldprototype_id: null,
//     // filter_set: 5768,
//     // group_count: 166,
//     // id: 4435,
//     // is_visible: true,
//     // item_prefix: "ВКК",
//     // items: {},
//     // items_count: 2067,
//     // level: 4,
//     // query: `раздел="выкройки" и тип="выкройки" и подтип="девочки"`,
//     // section: 2774,
//     // stats: 69.18,
//     // tags_list: [],
//     // url: "/vykroiki/detskaya_odezhda_dlya_devochek/",
//     // },
//     // },
//     // items_count: 2568,
//     // level: 3,
//     // query: `раздел="выкройки" и тип="выкройки" и (подтип="мальчики" или подтип="девочки")`,
//     // section: 2774,
//     // stats: 0.52,
//     // tags_list: [],
//     // url: "/vykroiki/detskaya_odezhda/",
//     // },
    
    
//     // function filterObj(obj) {
//     // let newObj = {}
//     // for (let key in obj) {
//     // console.log(({
//     // ...obj[key], items: Object.keys(obj[key].items).forEach((key, value) => {
    
//     // })
    
//     // }))
//     // }
//     // // }
    
//     // function copy(items) {
//     // let objCopy = {}; // objCopy будет хранить копию mainObj
//     // let key;
    
//     // for (key in items) {
//     // objCopy[key] = items[key]; // копирует каждое свойство objCopy
//     // }
//     // return objCopy;
//     // }
    
//     // console.log('copy',copy(items))
    
//     // function filterObj2(obj) {
//     // recursion(obj)
//     // function recursion(obj) {
//     // let newObject = Object.create(null)
//     // for (let key in obj) {
//     // if (obj[key].is_visible === true) {
//     // if (Object.keys(obj[key].items).length === 0) {
//     //
     
//     //newObject[key] = {
//     // ...obj[key], ['items']: {}
//     // }
//     // recursion(obj[key].items)
//     // } else if (Object.keys(obj[key].items).length !== 0) {
//     // newObject[key] = {
//     // ...obj[key]
//     // }
//     // recursion(obj[key].items)
//     // // ({ ...newObject, [key]: { ...obj[key], ['items']: recursion(obj[key].items) } })
//     // }
//     // }
//     // }
//     // return newObject
//     // }
//     // }
    
//     // console.log(filterObj2(items))
    
    
    
//     // ({
//     // ...newObject, [key]: { ...obj[key], ['items']: {} }
//     // })
    
//     // const removeKeys = ["is_visible"];
    
//     // let filterObject = filterNestObject(obj);
    
//     // function filterNestObject(obj) {
//     // return Object.keys(obj)
//     // .filter(key => {
//     // if (typeof obj[key] === 'object') {
//     // // set the key to the filtered result returned by the recursively called function
//     // obj[key] = filterNestObject(obj[key].items);
//     // }
    
//     // if (!removeKeys.includes(key)) return true;
    
//     // return false
//     // })
//     // .reduce((object, key) => {
//     // return {
//     // ...object,
//     // [key]: obj[key]
//     // };
//     // }, {});
    
//     // }
    
//     // console.log(filterNestObject(obj));
    


// //     'выкройки online': {
// //         autochild_fieldprototype_id: null,
// //         filter_set: 3340,
// //         filters: ["new", "sale"],
// //         group_count: 2366,
// //         id: 1951,
// //         is_visible: true,
// //         item_prefix: "ВКК",
// //         items: {
// //             'бесплатные выкройки': {
// //                 autochild_fieldprototype_id: null,
// //                 filter_set: 9650,
// //                 group_count: 10,
// //                 id: 8348,
// //                 is_visible: true,
// //                 item_prefix: null,
// //                 items: {},
// //                 items_count: 122,
// //                 level: 3,
// //                 query: `раздел="выкройки" и тип="выкройки" и подтип="бесплатные выкройки"`,
// //                 section: 2774,
// //                 stats: 1.82,
// //                 tags_list: [],
// //                 url: "/vykroiki/besplatnye_vykroiki/",
// //             },
// //             'головные уборы': {
// //                 autochild_fieldprototype_id: null,
// //                 filter_set: 5766,
// //                 group_count: 0,
// //                 id: 4421,
// //                 is_visible: true,
// //                 item_prefix: "ВКК",
// //                 items: {},
// //                 items_count: 0,
// //                 level: 3,
// //                 query: `раздел="выкройки" и тип="выкройки" и вид_одежды="головные уборы"`,
// //                 section: 2774,
// //                 stats: 0,
// //                 tags_list: [],
// //                 url: "/vykroiki/golovnyh_uborov/",
// //             },
// //             'детская одежда': {
// //                 autochild_fieldprototype_id: null,
// //                 filter_set: 5763,
// //                 group_count: 208,
// //                 id: 4418,
// //                 is_visible: true,
// //                 item_prefix: "ВКК",
// //                 items: {},
// //                 items_count: 2568,
// //                 level: 3,
// //                 query: `раздел="выкройки" и тип="выкройки" и (подтип="мальчики" или подтип="девочки")`,
// //                 section: 2774,
// //                 stats: 0.52,
// //                 tags_list: [],
// //                 url: "/vykroiki/detskaya_odezhda/",
// //             },
// //         },
// //         items_count: 29285,
// //         level: 1,
// //         section: 2774,
// //         stats: 0.83,
// //         tags_list: ["create-all-link"],
// //         url: "/vykroiki/",
// //     },

// //     const post = {
// //         comments: {
// //             1: {
// //                 id: 1,
// //                 parent: null
// //             },
// //             2: {
// //                 id: 2,
// //                 parent: 3
// //             },
// //             3: {
// //                 id: 3,
// //                 parent: 1
// //             },
// //             4: {
// //                 id: 4,
// //                 parent: null
// //             }
// //         }
// //     }
    
// //     let n = {}
// //     for(i in post.comments) {
// //     if (post.comments[i].parent === null) {
// //         Object.assign(n, { [i]: post.comments[i] })
// //     }
// // }