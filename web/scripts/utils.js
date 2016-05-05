/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

window.friendlyPix = window.friendlyPix || {};

/**
 * Set of utilities to handle Material Design Lite elements.
 */
friendlyPix.MaterialUtils = class {

  /**
   * Refreshes the UI state of the given Material Design Checkbox / Switch element.
   */
  static refreshSwitchState(element) {
    if (element instanceof jQuery) {
      element = element[0];
    }
    if (element.MaterialSwitch) {
      element.MaterialSwitch.checkDisabled();
      element.MaterialSwitch.checkToggleState();
    }
  }

  /**
   * Closes the drawer if it is open.
   */
  static closeDrawer() {
    let drawerObfuscator = $('.mdl-layout__obfuscator');
    if (drawerObfuscator.hasClass('is-visible')) {
      drawerObfuscator.click();
    }
  }

  /**
   * Clears the given Material Text Field.
   */
  static clearTextField(element) {
    element.value = '';
    element.parentElement.MaterialTextfield.boundUpdateClassesHandler();
  }

  /**
   * Clears the given Material Text Field.
   */
  static cloneElementWithTextField(element) {
    componentHandler.downgradeElements($('.mdl-textfield', element).get());
    let clone = element.clone();
    componentHandler.upgradeElements($('.mdl-textfield', element).get());
    componentHandler.upgradeElements($('.mdl-textfield', clone).get());
    return clone;
  }
};
