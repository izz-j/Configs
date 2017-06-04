var ContainerSelectionDialog=function(e){VaultItemDialog.call(this,e,{additionalHeaderClasses:["icon"],closeButtonEnabled:!0,maximizeButtonEnabled:!0,buttonAlign:this.RIGHT_ALIGN}),this.availableCollapsed=!1,this.selectedCollapsed=!1,this.toggleCollapse=function(e){return function(t,n,o){var l=$(o.target);e[t]?(n.expandAll(),e[t]=!1,l.attr("title","Collapse All")):(n.collapseAll(),e[t]=!0,l.attr("title","Expand All")),l.toggleClass("selected")}}(this)};ContainerSelectionDialog.prototype=Object.create(VaultItemDialog.prototype),ContainerSelectionDialog.prototype.constructor=ContainerSelectionDialog,function(e){ContainerSelectionDialog.prototype.initialize=function(e){VaultItemDialog.prototype.initialize.apply(this,arguments),function(n){e.find(".availableSearch").LP_addSearchHandlers("inputDialog",function(e){n.containers.available.applySearch(e)}),e.find(".selectedSearch").LP_addSearchHandlers("inputDialog",function(e){n.containers.selected.applySearch(e)}),e.find(".availableCollapseToggle").bind("click",function(e){n.toggleCollapse("availableCollapsed",n.containers.available,e)}),e.find(".selectedCollapseToggle").bind("click",function(e){n.toggleCollapse("selectedCollapsed",n.containers.selected,e)}),n.availableContainerElement=e.find(".containerSelectionDialogAvailable"),n.availableContainerElement.bind("dragover",function(e){n.selectedFromSelected.length>0&&(e.preventDefault(),e.stopPropagation())}),n.availableContainerElement.bind("drop",function(){t(n.selectedFromSelected,n.containers.available)}),n.selectedContainerElement=e.find(".containerSelectionDialogSelected"),n.selectedContainerElement.bind("dragover",function(e){n.selectedFromAvailable.length>0&&(e.preventDefault(),e.stopPropagation())}),n.selectedContainerElement.bind("drop",function(){t(n.selectedFromAvailable,n.containers.selected)}),n.availableVaultItemOverrides={getContextMenuItems:function(e){return[new LPTools.ContextMenuItem(Constants.ACTION_ADD,{text:n.getAddToSelectedText()})]},isOverride:function(e){return e===Constants.ACTION_ADD},add:function(){t(this.getItemsForAction(),n.containers.selected)}},n.availableGroupOverrides={getContextMenuItems:function(e){return[new LPTools.ContextMenuItem(Constants.ACTION_ADD,{text:n.getAddToSelectedText()})]},isOverride:function(e){return e===Constants.ACTION_ADD},add:function(){t(this.getItemChildren(),n.containers.selected)}},n.selectedVaultItemOverrides={getContextMenuItems:function(e){return[new LPTools.ContextMenuItem(Constants.ACTION_REMOVE,{text:n.getRemoveFromSelectedText()})]},isOverride:function(e){return e===Constants.ACTION_REMOVE},remove:function(){t(this.getItemsForAction(),n.containers.available)}},n.selectedGroupOverrides={getContextMenuItems:function(e){return[new LPTools.ContextMenuItem(Constants.ACTION_REMOVE,{text:n.getRemoveFromSelectedText()})]},isOverride:function(e){return e===Constants.ACTION_REMOVE},remove:function(){t(this.getItemChildren(),n.containers.available)}}}(this)};var t=function(e,t){e=e.slice();for(var n=0,o=e.length;n<o;++n){var l=e[n],a=l._parent._model,i=l._model;l.destruct(),t.addChild(i.newDisplayObject(),a)}};ContainerSelectionDialog.prototype.getAddToSelectedText=function(){return Strings.translateString("Add to Selected")},ContainerSelectionDialog.prototype.getRemoveFromSelectedText=function(){return Strings.translateString("Remove from Selected")},ContainerSelectionDialog.prototype.setup=function(e,t){this.selectedFromAvailable=[],this.selectedFromSelected=[],function(e){e.containers.available=new Container(e.getAvailableItems(t),{display:VaultItemBaseDisplay.prototype.DISPLAY_LIST,additionalItemClasses:"dialogItem noItemButtons",additionalGroupClasses:"dialogItemGroup",forceDrag:!0,allowDrop:!1,publishSelect:!1,dragstart:function(){e.selectedFromAvailable=LPTools.getDragItems()},override:function(){return this instanceof GroupDisplay?e.availableGroupOverrides:e.availableVaultItemOverrides}}),e.containers.available.initialize(e.availableContainerElement.get(0)),e.containers.selected=new Container(e.getSelectedItems(t),{display:VaultItemBaseDisplay.prototype.DISPLAY_LIST,additionalItemClasses:"dialogItem noItemButtons",additionalGroupClasses:"dialogItemGroup",forceDrag:!0,allowDrop:!1,publishSelect:!1,dragstart:function(){e.selectedFromSelected=LPTools.getDragItems()},override:function(){return this instanceof GroupDisplay?e.selectedGroupOverrides:e.selectedVaultItemOverrides}}),e.containers.selected.initialize(e.selectedContainerElement.get(0))}(this),VaultItemDialog.prototype.setup.apply(this,arguments)}}(document);