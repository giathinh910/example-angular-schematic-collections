import { classify, dasherize, normalize } from '@angular-devkit/core';
import { apply, branchAndMerge, chain, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { ModalOptions } from './schema';

const stringUtils = { dasherize, classify };

export default function (options: ModalOptions): Rule {
  options.path = options.path ? normalize(options.path) : options.path;
  
  const templateSource = apply(url('./files'), [
    template({
      ...stringUtils,
      ...options
    }),
    move(options.sourceDir)
  ]);
    
  return chain([
    branchAndMerge(chain([
      mergeWith(templateSource)
    ])),
  ]);
}