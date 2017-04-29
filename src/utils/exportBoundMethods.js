import bindKey from 'lodash/bindKey';

export default function exportBoundMethods(
  thisArg,
  methodNames,
  moduleExports
) {
  methodNames.forEach(name =>
    moduleExports[name] = bindKey(thisArg, name)
  );
}
